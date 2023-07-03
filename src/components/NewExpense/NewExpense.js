import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ExpenseForm from "./ExpenseForm";
import useHttpRequest from "../../hooks/use-http-request";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { isLoading, sendRequest: addExpense } = useHttpRequest();

  const createExpense = (enteredExpenseData, expenseData) => {
    const generatedId = expenseData.name; // firebase-specific => "name" contains generated id
    const createdExpense = {
      id: generatedId,
      title: enteredExpenseData.title,
      amount: enteredExpenseData.amount,
      date: enteredExpenseData.date,
    };

    onAddExpense(createdExpense);
    setIsEditing(false);
  };

  const onSaveExpenseDataHandler = async (enteredExpenseData) => {
    addExpense(
      {
        url: "https://react-expenses-30273-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          title: enteredExpenseData.title,
          amount: enteredExpenseData.amount,
          date: enteredExpenseData.date.toISOString().split("T")[0],
        },
      },

      createExpense.bind(null, enteredExpenseData)
    );
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
          loading={isLoading}
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
