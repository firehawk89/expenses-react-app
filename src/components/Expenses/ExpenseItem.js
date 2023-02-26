import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.scss";
import deleteImg from "../../img/trash.svg";

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2 className="expense-item__title">{props.title}</h2>
          <span className="expense-item__price">${props.amount}</span>
        </div>
        <button
          className="expense-item__delete"
          type="button"
          onClick={deleteHandler}
        >
          <img src={deleteImg} alt="Delete" />
        </button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
