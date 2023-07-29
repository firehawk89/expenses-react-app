import { useContext } from "react";
import Card from "./Card";
import Button from "./Button";
import { ModalContext } from "../../store/modal-context";
import styles from "./Modal.module.scss";

enum ModalActions {
  CANCEL = "cancel-btn",
  ACTION = "action-btn",
}

type ModalProps = {
  title: string;
  text: string;
  onConfirm: () => void;
};

const Modal: React.FC<ModalProps> = ({ title, text, onConfirm }) => {
  const modalCtx = useContext(ModalContext);

  const closeModalHandler = (event: React.SyntheticEvent<HTMLElement>) => {
    if (
      (event.target as HTMLElement).classList.contains(styles.modal) ||
      (event.target as HTMLButtonElement).id === ModalActions.CANCEL
    ) {
      console.log(event.target);
      modalCtx.removeModal();
    }
  };

  return (
    <div
      className={
        modalCtx.isActive
          ? `${styles.modal} ${styles["modal-active"]}`
          : styles.modal
      }
      onClick={closeModalHandler}
    >
      <Card className={styles["modal-content"]}>
        <h2 className={styles["modal-title"]}>{title}</h2>
        <p className={styles["modal-text"]}>{text}</p>
        <div className={styles["modal-actions"]}>
          <Button
            id={ModalActions.CANCEL}
            type="button"
            onClick={closeModalHandler}
          >
            Close
          </Button>
          <Button
            id={ModalActions.ACTION}
            className={styles["modal-delete-btn"]}
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
