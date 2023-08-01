import { useEffect, useState } from "react";
import Expense from "../../models/expense-model";
import Button from "../UI/Button";
import styles from "./NewExpense.module.scss";
import FormControl from "../UI/FormControl";
import useFormControl from "../../hooks/use-form-control";

type ReactFormProps = {
  onSaveExpenseData: (data: Expense) => void;
  onCancel: () => void;
  loading: boolean;
};

const checkInput = (value: string) => {
  return value.trim().length !== 0;
};

const NewExpenseForm: React.FC<ReactFormProps> = ({
  onSaveExpenseData,
  onCancel,
  loading,
}) => {
  const {
    value: titleValue,
    isValid: titleIsValid,
    inputChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    inputClearHandler: titleClearHandler,
  } = useFormControl(checkInput);

  const {
    value: amountValue,
    isValid: amountIsValid,
    inputChangeHandler: amountChangeHandler,
    inputBlurHandler: amountBlurHandler,
    inputClearHandler: amountClearHandler,
  } = useFormControl(checkInput);

  const {
    value: dateValue,
    isValid: dateIsValid,
    inputChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    inputClearHandler: dateClearHandler,
  } = useFormControl(checkInput);

  const [formIsValid, setFormIsValid] = useState<boolean | null>(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(titleIsValid && amountIsValid && dateIsValid);
    }, 250);

    return () => {
      clearTimeout(identifier);
    };
  }, [titleIsValid, amountIsValid, dateIsValid]);

  const clearInputs = () => {
    titleClearHandler();
    amountClearHandler();
    dateClearHandler();
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (formIsValid) {
      const expenseData: Expense = {
        title: titleValue,
        amount: +amountValue,
        date: new Date(dateValue),
      };

      onSaveExpenseData(expenseData);

      clearInputs();
    } else if (!titleIsValid) {
      titleBlurHandler();
    } else if (!amountIsValid) {
      amountBlurHandler();
    } else {
      dateBlurHandler();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense-controls"]}>
        <FormControl
          label="Title"
          id="title"
          type="text"
          value={titleValue}
          hasError={titleIsValid !== null && !titleIsValid}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
        />
        <FormControl
          label="Amount"
          id="amount"
          type="number"
          min="0.01"
          step="0.01"
          value={amountValue}
          hasError={amountIsValid !== null && !amountIsValid}
          onChange={amountChangeHandler}
          onBlur={amountBlurHandler}
        />
        <FormControl
          label="Date"
          id="date"
          type="date"
          min="2019-01-01"
          max="2023-12-31"
          value={dateValue}
          hasError={dateIsValid !== null && !dateIsValid}
          onChange={dateChangeHandler}
          onBlur={dateBlurHandler}
        />
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

export default NewExpenseForm;
