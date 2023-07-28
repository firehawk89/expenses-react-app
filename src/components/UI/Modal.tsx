import Card from "./Card";
import Button from "./Button";

const Modal = ({ className, title, text, onClose, onConfirm }) => {
  return (
    <div
      className={className ? className + " modal" : "modal"}
      onClick={onClose}
    >
      <Card className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <p className="modal__text">{text}</p>
        <div className="modal__actions">
          <Button type="button" onClick={onClose} className="modal__cancel-btn">
            Cancel
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
