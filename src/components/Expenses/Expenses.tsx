import { useState } from "react";
import Expense from "../../models/expense-model";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

type ExpensesProps = {
  data: Expense[];
  onDeleteItem: (id: string) => void;
  isLoading: boolean;
  error: string | null;
};

const Expenses: React.FC<ExpensesProps> = ({
  data,
  onDeleteItem,
  isLoading,
  error,
}) => {
  const [year, setYear] = useState("none");

  const onSelectedItemHandler = (selectedYear: string) => {
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
    <Card className="p-6 mt-8 mx-auto max-w-[50rem] bg-primary">
      <ExpensesFilter selected={year} onSelectedItem={onSelectedItemHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        isLoading={isLoading}
        error={error}
        items={filteredExpenses}
        onDeleteItem={onDeleteItem}
      />
    </Card>
  );
};

export default Expenses;
