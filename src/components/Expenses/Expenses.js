import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.scss";

const Expenses = (props) => {
  const { data, onDeleteItem } = props;
  const [year, setYear] = useState("none");

  const onSelectedItemHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  let filteredExpenses;
  if (year !== "none") {
    filteredExpenses = data.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
    });
  } else {
    filteredExpenses = data;
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onSelectedItem={onSelectedItemHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} onDeleteItem={onDeleteItem} />
    </Card>
  );
};

export default Expenses;
