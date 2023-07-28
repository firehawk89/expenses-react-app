import { useState } from "react";
import ReactDOM from "react-dom";
import useHttpRequest from "../../hooks/use-http-request";
import Modal from "../UI/Modal";
import ExpenseItem from "./ExpenseItem";
import Expense from "../../models/expense-model";

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
  const [warning, setWarning] = useState(false);
  const [expenseData, setExpenseData] = useState<{
    expenseId: string;
    expenseTitle: string;
  }>({ expenseId: "", expenseTitle: "" });
  const { sendRequest: deleteExpense } = useHttpRequest();

  const warningHandler = (id: string, title: string) => {
    setWarning(true);
    setExpenseData({ expenseId: id, expenseTitle: title });
  };

  const modalText = `Are you sure you want to delete expense "${expenseData.expenseTitle}"?`;
  const modalTitle = "Delete expense";

  const closeModalHandler = (event: React.SyntheticEvent<HTMLElement>) => {
    if (
      (event.target as HTMLElement).classList.contains("modal") ||
      (event.target as HTMLElement).classList.contains("modal__cancel-btn")
    ) {
      setWarning(false);
    }
  };

  const removeExpense = (expenseId: string) => {
    onDeleteItem(expenseId);
    setWarning(false);
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
    <h2 className="expenses__list-fallback">Found no expenses.</h2>
  );

  if (items.length > 0) {
    expenseList = (
      <ul className="expenses__list">
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
          className={`${warning ? "active" : ""}`}
          onConfirm={deleteItemHandler}
          onClose={closeModalHandler}
          title={modalTitle}
          text={modalText}
        />,
        document.getElementById("modal-root") as HTMLDivElement
      )}
      {content}
    </>
  );
};

export default ExpensesList;
