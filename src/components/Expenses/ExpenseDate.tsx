import styles from "./Expenses.module.scss";

type ExpenseDateProps = {
  date: Date;
};

const ExpenseDate: React.FC<ExpenseDateProps> = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className={styles["expenses-item-date"]}>
      <span className={styles["expenses-item-month"]}>{month}</span>
      <span className={styles["expenses-item-year"]}>{year}</span>
      <span className={styles["expenses-item-day"]}>{day}</span>
    </div>
  );
};

export default ExpenseDate;
