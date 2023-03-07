import React, { useEffect, useState } from "react";
import Button from "../UI/Button";

const ExpenseForm = (props) => {
  const { onSaveExpenseData, onCancel } = props;
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [titleIsValid, setTitleIsValid] = useState();
  const [amountIsValid, setAmountIsValid] = useState();
  const [dateIsValid, setDateIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(titleIsValid && amountIsValid && dateIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [titleIsValid, amountIsValid, dateIsValid]);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const validateTitleHandler = () => {
    setTitleIsValid(enteredTitle.trim().length !== 0);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const validateAmountHandler = () => {
    setAmountIsValid(enteredAmount.trim().length !== 0);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const validateDateHandler = () => {
    setDateIsValid(enteredDate.trim().length !== 0);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
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
            className={`new-expense__input${
              titleIsValid === false ? " error" : ""
            }`}
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            onBlur={validateTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__label" htmlFor="amount">
            Amount
          </label>
          <input
            id="amount"
            className={`new-expense__input${
              amountIsValid === false ? " error" : ""
            }`}
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            onBlur={validateAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__label" htmlFor="date">
            Date
          </label>
          <input
            id="date"
            className={`new-expense__input${
              dateIsValid === false ? " error" : ""
            }`}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            onBlur={validateDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <Button type="button" onClick={onCancel}>
          Close
        </Button>
        <Button type="submit" disabled={!formIsValid}>
          Add Expense
        </Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
