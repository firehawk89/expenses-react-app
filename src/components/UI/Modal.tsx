import { FC, useContext } from 'react'
import { ModalContext } from '../../store/modal-context'
import Card from './Card'
import Button from './Button'
import { MODAL_BUTTON } from '../../types/enums/ModalButton'
import { classnames } from '../../utils/misc'

type ModalProps = {
  title: string
  text: string
  onConfirm: () => void
}

const Modal: FC<ModalProps> = ({ title, text, onConfirm }) => {
  const modalCtx = useContext(ModalContext)

  const closeModal = (event: React.SyntheticEvent<HTMLElement>) => {
    if (
      (event.target as HTMLElement).classList.contains('modal') ||
      (event.target as HTMLButtonElement).id === MODAL_BUTTON.CANCEL
    ) {
      modalCtx.removeModal()
    }
  }

  return (
    <div
      className={classnames(
        'fixed top-0 left-0 w-full h-full flex items-center justify-center bg-dark bg-opacity-60 transition-all',
        modalCtx.isActive
          ? 'modal z-[5] opacity-100 visible'
          : '-z-[1] opacity-0 invisible'
      )}
      onClick={closeModal}
    >
      <Card className="p-8 flex flex-col bg-light">
        <h2 className="mb-5 text-xl font-semibold text-center">{title}</h2>
        <p className="mb-8">{text}</p>
        <div className="flex justify-center gap-4">
          <Button id={MODAL_BUTTON.CANCEL} type="button" onClick={closeModal}>
            Close
          </Button>
          <Button
            id={MODAL_BUTTON.ACTION}
            className="bg-danger hover:bg-[#ce0000]"
            type="button"
            onClick={onConfirm}
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Modal
