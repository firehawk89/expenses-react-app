import { Fragment, useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import useHttpRequest from "./hooks/use-http-request";

/*
const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
*/

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const { isLoading, error, sendRequest: fetchExpenses } = useHttpRequest();

  useEffect(() => {
    const updateExpenses = (expenseObj) => {
      const loadedExpenses = [];

      for (const expenseKey in expenseObj) {
        loadedExpenses.push({
          id: expenseKey,
          title: expenseObj[expenseKey].title,
          amount: expenseObj[expenseKey].amount,
          date: new Date(expenseObj[expenseKey].date),
        });
      }

      setExpenses(loadedExpenses);
    };

    fetchExpenses(
      {
        url: "https://react-expenses-30273-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
      },
      updateExpenses
    );
  }, [fetchExpenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteItemHandler = (itemId) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== itemId);
    });
  };

  return (
    <Fragment>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        isLoading={isLoading}
        error={error}
        data={expenses}
        onDeleteItem={deleteItemHandler}
      />
    </Fragment>
  );
};

export default App;
