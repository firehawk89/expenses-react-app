import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./Modal.scss";

const Modal = (props) => {
  const { className, expense, onClose, onConfirm } = props;

  return (
    <div
      className={className ? className + " modal" : "modal"}
      onClick={onClose}
    >
      <Card className="modal__content">
        <h2 className="modal__title">Delete expense</h2>
        <p className="modal__text">
          Are you sure you want to delete expense "{expense}"?
        </p>
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
