import ExpenseItemDate from "./ExpenseItemDate";
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
    <Card
      className="p-3 my-4 flex items-center justify-between bg-secondary"
      tagName="li"
    >
      <ExpenseItemDate date={date} />
      <div className="flex-[1] flex flex-col-reverse items-end md:flex-row md:items-center justify-start gap-3">
        <h2 className="flex-[1] md:mx-4 md:text-xl text-right md:text-left text-light">
          {title}
        </h2>
        <span className="p-2 md:py-2 md:px-6 md:text-xl rounded-xl text-light bg-accent">
          ${amount}
        </span>
      </div>
      <Button
        className="!p-3 ml-3 bg-dark hover:shadow-card focus:scale-95 transition-all"
        type="button"
        onClick={deleteHandler}
      >
        <img className="w-4 h-4 md:w-5 md:h-5" src={deleteImg} alt="Delete" />
      </Button>
    </Card>
  );
};

export default ExpenseItem;
