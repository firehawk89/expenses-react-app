import React, { useState } from "react";
import Modal from "../UI/Modal";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";

const ExpensesList = (props) => {
  const { items, onDeleteItem } = props;
  const [warning, setWarning] = useState(false);
  const [expenseData, setExpenseData] = useState({});

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  const warningHandler = (id, title) => {
    setWarning(true);
    setExpenseData({ expenseId: id, expenseTitle: title });
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
    onDeleteItem(expenseData.expenseId);
  };

  return (
    <div>
      <Modal
        className={`${warning ? "active" : ""}`}
        onConfirm={deleteItemHandler}
        onClose={closeModalHandler}
        expense={expenseData.expenseTitle}
      />
      <ul className="expenses-list">
        {items.map((expense) => (
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
