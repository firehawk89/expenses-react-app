import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import Button from "../UI/Button";
import deleteImg from "../../assets/img/trash.svg";

const ExpenseItem = ({ id, title, amount, date, onDelete }) => {
  const deleteHandler = () => {
    onDelete(id, title);
  };

  return (
    <Card className="expenses__item" tagName="li">
      <ExpenseDate date={date} />
      <div className="expenses__item-description">
        <h2 className="expenses__item-title">{title}</h2>
        <span className="expenses__item-price">${amount}</span>
      </div>
      <Button
        className="expenses__item-delete-btn"
        type="button"
        onClick={deleteHandler}
      >
        <img src={deleteImg} alt="Delete" />
      </Button>
    </Card>
  );
};

export default ExpenseItem;
