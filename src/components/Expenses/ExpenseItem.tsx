import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import Button from "../UI/Button";
import deleteImg from "../../assets/img/trash.svg";
import styles from "./Expenses.module.scss";

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
    <Card className={styles["expenses-item"]} tagName="li">
      <ExpenseDate date={date} />
      <div className={styles["expenses-item-description"]}>
        <h2 className={styles["expenses-item-title"]}>{title}</h2>
        <span className={styles["expenses-item-price"]}>${amount}</span>
      </div>
      <Button
        className={styles["expenses-item-delete-btn"]}
        type="button"
        onClick={deleteHandler}
      >
        <img src={deleteImg} alt="Delete" />
      </Button>
    </Card>
  );
};

export default ExpenseItem;
