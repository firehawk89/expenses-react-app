import React, { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__label" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            className="new-expense__input"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__label" htmlFor="amount">
            Amount
          </label>
          <input
            id="amount"
            className="new-expense__input"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__label" htmlFor="date">
            Date
          </label>
          <input
            id="date"
            className="new-expense__input"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          className="new-expense__btn"
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className="new-expense__btn" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
