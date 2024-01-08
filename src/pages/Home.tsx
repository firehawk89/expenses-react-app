import { useState, useEffect, FC } from "react";
import useHttpRequest from "../hooks/use-http-request";
import Expense from "../models/expense-model";
import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense";

const HomePage: FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const { isLoading, error, sendRequest: fetchExpenses } = useHttpRequest();

  useEffect(() => {
    const updateExpenses = (expensesObj: Expense[]) => {
      const loadedExpenses = [];

      for (const expenseKey in expensesObj) {
        loadedExpenses.push(
          new Expense(
            expenseKey,
            expensesObj[expenseKey].title,
            expensesObj[expenseKey].amount,
            new Date(expensesObj[expenseKey].date)
          )
        );
      }

      setExpenses(loadedExpenses);
    };

    fetchExpenses(
      {
        url: `${import.meta.env.VITE_DATABASE_URL}/expenses.json`,
      },
      updateExpenses
    );
  }, [fetchExpenses]);

  const addExpenseHandler = (expense: Expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteItemHandler = (itemId: string) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== itemId);
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        data={expenses}
        isLoading={isLoading}
        error={error}
        onDeleteItem={deleteItemHandler}
      />
    </>
  );
};

export default HomePage;
