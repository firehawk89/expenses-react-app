import { FC } from "react";
import { chartData } from "../../utils/constants";
import Expense from "../../types/models/expense-model";
import Chart from "../Chart/Chart";

type ExpensesChartProps = {
  expenses: Expense[];
};

const ExpensesChart: FC<ExpensesChartProps> = ({ expenses }) => {
  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartData[expenseMonth].value += expense.amount;
  }

  return <Chart data={chartData} />;
};

export default ExpensesChart;
