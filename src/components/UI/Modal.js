import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./Modal.scss";

const Modal = (props) => {
  return (
    <div
      className={props.className ? props.className + " modal" : "modal"}
      onClick={props.onClose}
    >
      <Card className="modal__content">
        <h2 className="modal__title">Delete expense</h2>
        <p className="modal__text">
          Are you sure you want to delete expense "{props.expense}"?
        </p>
        <div className="modal__actions">
          <Button
            type="button"
            onClick={props.onClose}
            className="modal__cancel-btn"
          >
            Cancel
          </Button>
          <Button
            className="modal__delete-btn"
            type="button"
            onClick={props.onConfirm}
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
