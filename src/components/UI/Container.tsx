import { FC, ReactNode } from 'react'

type ContainerProps = { children: ReactNode }

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="px-6 sm:px-12 lg:px-20">{children}</div>
}

export default Container
