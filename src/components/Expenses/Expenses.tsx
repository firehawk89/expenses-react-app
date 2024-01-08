import { FC, useState } from "react";
import Expense from "../../types/models/expense-model";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

type ExpensesProps = {
  data: Expense[];
  isLoading: boolean;
  error: string | null;
  onDeleteItem: (id: string) => void;
};

const Expenses: FC<ExpensesProps> = ({
  data,
  isLoading,
  error,
  onDeleteItem,
}) => {
  const [year, setYear] = useState<string>("");

  const onSelectedItemHandler = (selectedYear: string) => {
    setYear(selectedYear);
  };

  let filteredExpenses;
  if (year) {
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
        expenses={filteredExpenses}
        isLoading={isLoading}
        error={error}
        onDeleteItem={onDeleteItem}
      />
    </Card>
  );
};

export default Expenses;
