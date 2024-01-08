import { FC, createContext, useState } from 'react'

type ModalContextObj = {
  isActive: boolean
  displayModal: () => void
  removeModal: () => void
}

export const ModalContext = createContext<ModalContextObj>({
  isActive: false,
  displayModal: () => {},
  removeModal: () => {},
})

const ModalContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const displayWarningHandler = () => {
    setIsActive(true)
  }

  const removeWarningHandler = () => {
    setIsActive(false)
  }

  const contextValue: ModalContextObj = {
    isActive,
    displayModal: displayWarningHandler,
    removeModal: removeWarningHandler,
  }

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
