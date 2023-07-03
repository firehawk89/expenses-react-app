import { useEffect, useReducer, useState } from "react";
import Button from "../UI/Button";

const initialState = {
  value: "",
  isValid: null,
};

const inputReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: checkInput(action.value) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: checkInput(state.value) };
  }
  if (action.type === "CLEAR_INPUT") {
    return initialState;
  }
  return { value: "", isValid: false };
};

const checkInput = (value) => {
  return value.trim().length !== 0;
};

const ExpenseForm = ({ onSaveExpenseData, onCancel, loading }) => {
  const [titleState, dispatchTitle] = useReducer(inputReducer, initialState);
  const [amountState, dispatchAmount] = useReducer(inputReducer, initialState);
  const [dateState, dispatchDate] = useReducer(inputReducer, initialState);
  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: titleIsValid } = titleState;
  const { isValid: amountIsValid } = amountState;
  const { isValid: dateIsValid } = dateState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(titleIsValid && amountIsValid && dateIsValid);
    }, 250);

    return () => {
      clearTimeout(identifier);
    };
  }, [titleIsValid, amountIsValid, dateIsValid]);

  const titleChangeHandler = (event) => {
    dispatchTitle({ type: "USER_INPUT", value: event.target.value });
  };

  const amountChangeHandler = (event) => {
    dispatchAmount({ type: "USER_INPUT", value: event.target.value });
  };

  const dateChangeHandler = (event) => {
    dispatchDate({ type: "USER_INPUT", value: event.target.value });
  };

  const validateTitleHandler = () => {
    dispatchTitle({ type: "INPUT_BLUR" });
  };

  const validateAmountHandler = () => {
    dispatchAmount({ type: "INPUT_BLUR" });
  };

  const validateDateHandler = () => {
    dispatchDate({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      const expenseData = {
        title: titleState.value,
        amount: +amountState.value,
        date: new Date(dateState.value),
      };

      onSaveExpenseData(expenseData);

      dispatchTitle({ type: "CLEAR_INPUT" });
      dispatchAmount({ type: "CLEAR_INPUT" });
      dispatchDate({ type: "CLEAR_INPUT" });
    } else if (!titleIsValid) {
      dispatchTitle({ type: "INPUT_BLUR" });
    } else if (!amountIsValid) {
      dispatchAmount({ type: "INPUT_BLUR" });
    } else {
      dispatchDate({ type: "INPUT_BLUR" });
    }
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
              titleState.isValid === false ? " error" : ""
            }`}
            type="text"
            value={titleState.value}
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
              amountState.isValid === false ? " error" : ""
            }`}
            type="number"
            min="0.01"
            step="0.01"
            value={amountState.value}
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
              dateState.isValid === false ? " error" : ""
            }`}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={dateState.value}
            onChange={dateChangeHandler}
            onBlur={validateDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <Button type="button" onClick={onCancel}>
          Close
        </Button>
        <Button type="submit">{loading ? "Sending..." : "Add Expense"}</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
