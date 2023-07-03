import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import useHttpRequest from "../../hooks/use-http-request";
import Modal from "../UI/Modal";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const { items, onDeleteItem } = props;
  const [warning, setWarning] = useState(false);
  const [expenseData, setExpenseData] = useState({});
  const { sendRequest: deleteExpense } = useHttpRequest();

  const warningHandler = (id, title) => {
    setWarning(true);
    setExpenseData({ expenseId: id, expenseTitle: title });
  };

  const modalText = `Are you sure you want to delete expense "${expenseData.expenseTitle}"?`;
  const modalTitle = "Delete expense";

  const closeModalHandler = (event) => {
    if (
      event.target.classList.contains("modal") ||
      event.target.classList.contains("modal__cancel-btn")
    ) {
      setWarning(false);
    }
  };

  const removeExpense = (expenseId) => {
    onDeleteItem(expenseId);
    setWarning(false);
  };

  const deleteItemHandler = async () => {
    deleteExpense(
      {
        url: `https://react-expenses-30273-default-rtdb.europe-west1.firebasedatabase.app/expenses/${expenseData.expenseId}.json`,
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

  if (props.error) {
    content = <h2 className="expenses__list-fallback">{props.error}</h2>;
  }

  if (props.isLoading) {
    content = <h2 className="expenses__list-fallback">Loading expenses...</h2>;
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Modal
          className={`${warning ? "active" : ""}`}
          onConfirm={deleteItemHandler}
          onClose={closeModalHandler}
          expense={expenseData.expenseTitle}
          title={modalTitle}
          text={modalText}
        />,
        document.getElementById("modal-root")
      )}
      {content}
    </Fragment>
  );
};

export default ExpensesList;
