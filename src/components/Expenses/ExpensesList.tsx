import { useState, useContext } from "react";
import ReactDOM from "react-dom";
import useHttpRequest from "../../hooks/use-http-request";
import Modal from "../UI/Modal";
import ExpenseItem from "./ExpenseItem";
import Expense from "../../models/expense-model";
import { ModalContext } from "../../store/modal-context";
import styles from "./Expenses.module.scss";

type ExpensesListProps = {
  items: Expense[];
  onDeleteItem: (id: string) => void;
  isLoading: boolean;
  error: string | null;
};

const ExpensesList: React.FC<ExpensesListProps> = ({
  items,
  onDeleteItem,
  isLoading,
  error,
}) => {
  const modalCtx = useContext(ModalContext);
  const [expenseData, setExpenseData] = useState<{
    expenseId: string;
    expenseTitle: string;
  }>({ expenseId: "", expenseTitle: "" });
  const { sendRequest: deleteExpense } = useHttpRequest();

  const warningHandler = (id: string, title: string) => {
    modalCtx.displayModal();
    setExpenseData({ expenseId: id, expenseTitle: title });
  };

  const modalText = `Are you sure you want to delete expense "${expenseData.expenseTitle}"?`;
  const modalTitle = "Delete expense";

  const removeExpense = (expenseId: string) => {
    onDeleteItem(expenseId);
    modalCtx.removeModal();
  };

  const deleteItemHandler = async () => {
    deleteExpense(
      {
        url: `${import.meta.env.VITE_DATABASE_URL}/expenses/${
          expenseData.expenseId
        }.json`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },

      removeExpense.bind(null, expenseData.expenseId)
    );
  };

  let expenseList = (
    <h2 className={styles["expenses-list-fallback"]}>Found no expenses.</h2>
  );

  if (items.length > 0) {
    expenseList = (
      <ul className={styles["expenses-list"]}>
        {items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            onDelete={warningHandler}
          />
        ))}
      </ul>
    );
  }

  let content = expenseList;

  if (error) {
    content = <h2 className="expenses__list-fallback">{error}</h2>;
  }

  if (isLoading) {
    content = <h2 className="expenses__list-fallback">Loading expenses...</h2>;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Modal
          title={modalTitle}
          text={modalText}
          onConfirm={deleteItemHandler}
        />,
        document.getElementById("modal-root") as HTMLDivElement
      )}
      {content}
    </>
  );
};

export default ExpensesList;
