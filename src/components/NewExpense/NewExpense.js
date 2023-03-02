import React, { useState } from "react";
import "./NewExpense.scss";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import Button from "../UI/Button";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <Card className="new-expense">
      {!isEditing ? (
        <Button className="new-expense__btn" onClick={startEditingHandler}>
          Add New Expense
        </Button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
