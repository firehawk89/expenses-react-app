import React, { useState } from "react";
import Modal from "../UI/Modal";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";

const ExpensesList = (props) => {
  const [warning, setWarning] = useState(false);
  const [expenseId, setExpenseId] = useState("");
  const [expenseTitle, setExpenseTitle] = useState("");
  //make object in useSate

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  const warningHandler = (id, name) => {
    setWarning(true);
    setExpenseId(id);
    setExpenseTitle(name);
  };

  const closeModalHandler = (event) => {
    if (
      event.target.classList.contains("modal") ||
      event.target.classList.contains("modal__cancel-btn")
    ) {
      setWarning(false);
    }
  };

  const deleteItemHandler = () => {
    setWarning(false);
    props.onDeleteItem(expenseId);
  };

  return (
    <div>
      <Modal
        className={`${warning ? "active" : ""}`}
        onConfirm={deleteItemHandler}
        onClose={closeModalHandler}
        expense={expenseTitle}
      />
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            onDelete={warningHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
