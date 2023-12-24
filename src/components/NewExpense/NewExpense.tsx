import { useState } from "react";
import useHttpRequest from "../../hooks/use-http-request";
import Expense from "../../models/expense-model";
import Card from "../UI/Card";
import Button from "../UI/Button";
import NewExpenseForm from "./NewExpenseForm";
import styles from "./NewExpense.module.scss";

type NewExpenseProps = {
  onAddExpense: (expense: Expense) => void;
};

const NewExpense: React.FC<NewExpenseProps> = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { isLoading, sendRequest: addExpense } = useHttpRequest();

  const createExpense = (
    enteredExpenseData: Expense,
    expenseData: { name: string }
  ) => {
    const generatedId = expenseData.name; // firebase-specific => "name" contains generated id
    const createdExpense = new Expense(
      generatedId,
      enteredExpenseData.title,
      enteredExpenseData.amount,
      enteredExpenseData.date
    );

    onAddExpense(createdExpense);
    setIsEditing(false);
  };

  const onSaveExpenseDataHandler = async (enteredExpenseData: Expense) => {
    addExpense(
      {
        url: `${import.meta.env.VITE_DATABASE_URL}/expenses.json`,
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
    <Card className={styles["new-expense"]}>
      {!isEditing ? (
        <Button type="button" onClick={startEditingHandler}>
          Add New Expense
        </Button>
      ) : (
        <NewExpenseForm
          loading={isLoading}
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
