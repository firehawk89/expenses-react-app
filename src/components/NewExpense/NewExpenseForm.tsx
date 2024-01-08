import { FC, useEffect, useState } from "react";
import useFormControl from "../../hooks/use-form-control";
import Expense from "../../types/models/expense-model";
import Button from "../UI/Button";
import FormControl from "../UI/FormControl";
import styles from "./NewExpense.module.scss";

type ReactFormProps = {
  isLoading: boolean;
  onSubmit: (data: Expense) => void;
  onCancel: () => void;
};

const checkInput = (value: string) => {
  return value.trim().length !== 0;
};

const NewExpenseForm: FC<ReactFormProps> = ({
  isLoading,
  onSubmit,
  onCancel,
}) => {
  const {
    value: titleValue,
    isValid: titleIsValid,
    handleChange: handleTitleChange,
    handleBlur: handleTitleBlur,
    handleClear: handleTitleClear,
  } = useFormControl(checkInput);

  const {
    value: amountValue,
    isValid: amountIsValid,
    handleChange: handleAmountChange,
    handleBlur: handleAmountBlur,
    handleClear: handleAmountClear,
  } = useFormControl(checkInput);

  const {
    value: dateValue,
    isValid: dateIsValid,
    handleChange: handleDateChange,
    handleBlur: handleDateBlur,
    handleClear: handleDateClear,
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
    handleTitleClear();
    handleAmountClear();
    handleDateClear();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (formIsValid) {
      const expenseData: Expense = {
        title: titleValue,
        amount: +amountValue,
        date: new Date(dateValue),
      };

      onSubmit(expenseData);

      clearInputs();
    } else if (!titleIsValid) {
      handleTitleBlur();
    } else if (!amountIsValid) {
      handleAmountBlur();
    } else {
      handleDateBlur();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`mb-6 flex flex-wrap justify-stretch md:justify-center gap-6 text-left ${styles["new-expense-controls"]}`}
      >
        <FormControl
          label="Title"
          id="title"
          type="text"
          value={titleValue}
          hasError={titleIsValid !== null && !titleIsValid}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
        />
        <FormControl
          label="Amount"
          id="amount"
          type="number"
          min="0.01"
          step="0.01"
          value={amountValue}
          hasError={amountIsValid !== null && !amountIsValid}
          onChange={handleAmountChange}
          onBlur={handleAmountBlur}
        />
        <FormControl
          label="Date"
          id="date"
          type="date"
          min="2019-01-01"
          max="2023-12-31"
          value={dateValue}
          hasError={dateIsValid !== null && !dateIsValid}
          onChange={handleDateChange}
          onBlur={handleDateBlur}
        />
      </div>
      <div className="flex flex-wrap justify-center md:justify-end gap-4">
        <Button type="button" onClick={onCancel}>
          Close
        </Button>
        <Button type="submit">
          {isLoading ? "Sending..." : "Add Expense"}
        </Button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
