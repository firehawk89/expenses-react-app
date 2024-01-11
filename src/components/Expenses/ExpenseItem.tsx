import { FC } from 'react'
import Expense from '../../types/models/expense-model'
import ExpenseItemDate from './ExpenseItemDate'
import Card from '../UI/Card'
import Button from '../UI/Button'
import deleteImg from '../../assets/img/trash.svg'

type ExpenseItemProps = {
  data: Expense
  onDelete: (id: string, title: string) => void
}

const ExpenseItem: FC<ExpenseItemProps> = ({ data, onDelete }) => {
  const { id, title, amount, date } = data

  const handleExpenseDelete = () => {
    onDelete(id!, title)
  }

  return (
    <Card
      className="p-4 my-4 flex items-center justify-between bg-light"
      tagName="li"
    >
      <ExpenseItemDate date={date} />
      <div className="flex-[1] flex flex-col-reverse items-end md:flex-row md:items-center justify-start gap-3">
        <h2 className="flex-[1] md:mx-4 md:text-xl text-right md:text-left">
          {title}
        </h2>
        <span className="p-2 md:py-2 md:px-6 md:text-xl rounded-xl text-light bg-accent">
          ${amount}
        </span>
      </div>
      <Button
        className="!p-3 ml-3 hover:shadow-card focus:scale-95 transition-all"
        type="button"
        onClick={handleExpenseDelete}
      >
        <img className="w-4 h-4 md:w-5 md:h-5" src={deleteImg} alt="Delete" />
      </Button>
    </Card>
  )
}

export default ExpenseItem
