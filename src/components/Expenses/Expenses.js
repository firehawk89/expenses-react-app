import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.scss";

const Expenses = (props) => {
  const [year, setYear] = useState("2023");

  const onSelectedItemHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  /* const renderedItems = [];
  for (let dataItem of props.data) {
    renderedItems.push(
      <ExpenseItem
        key={dataItem.id}
        title={dataItem.title}
        amount={dataItem.amount}
        date={dataItem.date}
      />
    );
  } */

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onSelectedItem={onSelectedItemHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
