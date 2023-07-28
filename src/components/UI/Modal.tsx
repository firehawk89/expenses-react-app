import { useContext } from "react";
import Card from "./Card";
import Button from "./Button";
import { ModalContext } from "../../store/modal-context";

type ModalProps = {
  className: string;
  title: string;
  text: string;
  onConfirm: () => void;
};

const Modal: React.FC<ModalProps> = ({ className, title, text, onConfirm }) => {
  const modalCtx = useContext(ModalContext);

  const closeModalHandler = (event: React.SyntheticEvent<HTMLElement>) => {
    if (
      (event.target as HTMLElement).classList.contains("modal") ||
      (event.target as HTMLElement).classList.contains("modal__cancel-btn")
    ) {
      modalCtx.removeModal();
    }
  };

  return (
    <div
      className={className ? className + " modal" : "modal"}
      onClick={closeModalHandler}
    >
      <Card className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <p className="modal__text">{text}</p>
        <div className="modal__actions">
          <Button
            type="button"
            onClick={closeModalHandler}
            className="modal__cancel-btn"
          >
            Close
          </Button>
          <Button
            className="modal__delete-btn"
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
