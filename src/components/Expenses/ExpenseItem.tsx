import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import Button from "../UI/Button";
import deleteImg from "../../assets/img/trash.svg";

type ExpenseItemProps = {
  id: string | undefined;
  title: string;
  amount: number;
  date: Date;
  onDelete: (id: string, title: string) => void;
};

const ExpenseItem: React.FC<ExpenseItemProps> = ({
  id,
  title,
  amount,
  date,
  onDelete,
}) => {
  const deleteHandler = () => {
    if (id) {
      onDelete(id, title);
    }
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
