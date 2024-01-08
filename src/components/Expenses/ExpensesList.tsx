import { useState, useContext, FC } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../../store/modal-context";
import useHttpRequest from "../../hooks/use-http-request";
import Expense from "../../types/models/expense-model";
import Modal from "../UI/Modal";
import ExpenseItem from "./ExpenseItem";

type ExpensesListProps = {
  items: Expense[];
  onDeleteItem: (id: string) => void;
  isLoading: boolean;
  error: string | null;
};

const ExpensesList: FC<ExpensesListProps> = ({
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
    modalCtx.removeModal();
    onDeleteItem(expenseId);
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
    <h2 className="mt-8 md:text-xl font-bold text-center text-light">
      Found no expenses.
    </h2>
  );

  if (items.length > 0) {
    expenseList = (
      <ul className="list-none">
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

  if (isLoading) {
    content = (
      <h2 className="mt-8 md:text-xl font-bold text-center text-light">
        Loading expenses...
      </h2>
    );
  }

  if (error) {
    content = (
      <h2 className="mt-8 md:text-xl font-bold text-center text-light">
        {error}
      </h2>
    );
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
