import { useEffect, useReducer, useState } from "react";
import Expense from "../../models/expense-model";
import Button from "../UI/Button";
import styles from "./NewExpense.module.scss";

type ReactFormProps = {
  onSaveExpenseData: (data: Expense) => void;
  onCancel: () => void;
  loading: boolean;
};

enum InputActionType {
  INPUT = "USER_INPUT",
  BLUR = "INPUT_BLUR",
  CLEAR = "CLEAR_INPUT",
}

type InputState = {
  value: string;
};

type InputAction = { type: InputActionType.INPUT; value: string };
type BlurAction = { type: InputActionType.BLUR };
type ClearAction = { type: InputActionType.CLEAR };
type FormInputActions = InputAction | BlurAction | ClearAction;

const initialState = {
  value: "",
  isValid: null,
};

const inputReducer = (state: InputState, action: FormInputActions) => {
  switch (action.type) {
    case InputActionType.INPUT:
      return { value: action.value, isValid: checkInput(action.value) };
    case InputActionType.BLUR:
      return { value: state.value, isValid: checkInput(state.value) };
    case InputActionType.CLEAR:
      return initialState;
    default:
      return { value: "", isValid: false };
  }
};

const checkInput = (value: string) => {
  return value.trim().length !== 0;
};

const ExpenseForm: React.FC<ReactFormProps> = ({
  onSaveExpenseData,
  onCancel,
  loading,
}) => {
  const [titleState, dispatchTitle] = useReducer(inputReducer, initialState);
  const [amountState, dispatchAmount] = useReducer(inputReducer, initialState);
  const [dateState, dispatchDate] = useReducer(inputReducer, initialState);
  const [formIsValid, setFormIsValid] = useState<boolean | null>(false);

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

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchTitle({ type: InputActionType.INPUT, value: event.target.value });
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchAmount({ type: InputActionType.INPUT, value: event.target.value });
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchDate({ type: InputActionType.INPUT, value: event.target.value });
  };

  const validateTitleHandler = () => {
    dispatchTitle({ type: InputActionType.BLUR });
  };

  const validateAmountHandler = () => {
    dispatchAmount({ type: InputActionType.BLUR });
  };

  const validateDateHandler = () => {
    dispatchDate({ type: InputActionType.BLUR });
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (formIsValid) {
      const expenseData: Expense = {
        title: titleState.value,
        amount: +amountState.value,
        date: new Date(dateState.value),
      };

      onSaveExpenseData(expenseData);

      dispatchTitle({ type: InputActionType.CLEAR });
      dispatchAmount({ type: InputActionType.CLEAR });
      dispatchDate({ type: InputActionType.CLEAR });
    } else if (!titleIsValid) {
      dispatchTitle({ type: InputActionType.BLUR });
    } else if (!amountIsValid) {
      dispatchAmount({ type: InputActionType.BLUR });
    } else {
      dispatchDate({ type: InputActionType.BLUR });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense-controls"]}>
        <div className={styles["new-expense-control"]}>
          <label className={styles["new-expense-label"]} htmlFor="title">
            Title
          </label>
          <input
            id="title"
            className={`${styles["new-expense-input"]} ${
              titleState.isValid === false
                ? styles["new-expense-input-error"]
                : ""
            }`}
            type="text"
            value={titleState.value}
            onChange={titleChangeHandler}
            onBlur={validateTitleHandler}
          />
        </div>
        <div className={styles["new-expense-control"]}>
          <label className={styles["new-expense-label"]} htmlFor="amount">
            Amount
          </label>
          <input
            id="amount"
            className={`${styles["new-expense-input"]} ${
              amountState.isValid === false
                ? styles["new-expense-input-error"]
                : ""
            }`}
            type="number"
            min="0.01"
            step="0.01"
            value={amountState.value}
            onChange={amountChangeHandler}
            onBlur={validateAmountHandler}
          />
        </div>
        <div className={styles["new-expense-control"]}>
          <label className={styles["new-expense-label"]} htmlFor="date">
            Date
          </label>
          <input
            id="date"
            className={`${styles["new-expense-input"]} ${
              dateState.isValid === false
                ? styles["new-expense-input-error"]
                : ""
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
      <div className={styles["new-expense-actions"]}>
        <Button type="button" onClick={onCancel}>
          Close
        </Button>
        <Button type="submit">{loading ? "Sending..." : "Add Expense"}</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
