import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2 className="expense-item__title">{props.title}</h2>
          <span className="expense-item__price">${props.amount}</span>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
