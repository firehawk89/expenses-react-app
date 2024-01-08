import { FC, useContext } from "react";
import { ModalContext } from "../../store/modal-context";
import Card from "./Card";
import Button from "./Button";
import { MODAL_BUTTON } from "../../types/enums/ModalButton";

type ModalProps = {
  title: string;
  text: string;
  onConfirm: () => void;
};

const Modal: FC<ModalProps> = ({ title, text, onConfirm }) => {
  const modalCtx = useContext(ModalContext);

  const closeModal = (event: React.SyntheticEvent<HTMLElement>) => {
    if (
      (event.target as HTMLElement).classList.contains("modal") ||
      (event.target as HTMLButtonElement).id === MODAL_BUTTON.CANCEL
    ) {
      modalCtx.removeModal();
    }
  };

  return (
    <div
      className={
        modalCtx.isActive
          ? "modal fixed z-[5] top-0 left-0 w-full h-full flex items-center justify-center opacity-100 visible bg-dark bg-opacity-60 transition-all"
          : "fixed -z-[1] top-0 left-0 w-full h-full flex items-center justify-center opacity-0 invisible bg-dark bg-opacity-60 transition-all"
      }
      onClick={closeModal}
    >
      <Card className="p-8 flex flex-col text-dark bg-light">
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
  );
};

export default Modal;
