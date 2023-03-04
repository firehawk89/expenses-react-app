import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import Button from "../UI/Button";
import deleteImg from "../../img/trash.svg";

const ExpenseItem = (props) => {
  const { id, title, amount, date, onDelete } = props;
  const deleteHandler = () => {
    onDelete(id, title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2 className="expense-item__title">{title}</h2>
          <span className="expense-item__price">${amount}</span>
        </div>
        <Button
          className="expense-item__delete"
          type="button"
          onClick={deleteHandler}
        >
          <img src={deleteImg} alt="Delete" />
        </Button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
