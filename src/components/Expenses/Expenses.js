import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.scss";

const Expenses = (props) => {
  const [year, setYear] = useState("None");

  const onSelectedItemHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  /* const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  }); */

  let filteredExpenses;
  if (year !== "None") {
    filteredExpenses = props.data.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
    });
  } else {
    filteredExpenses = props.data;
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onSelectedItem={onSelectedItemHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        items={filteredExpenses}
        onDeleteItem={props.onDeleteItem}
      />
    </Card>
  );
};

export default Expenses;
