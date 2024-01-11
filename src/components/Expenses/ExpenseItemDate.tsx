import { FC } from 'react'

type ExpenseDateProps = {
  date: Date
}

const ExpenseItemDate: FC<ExpenseDateProps> = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const year = date.getFullYear()

  return (
    <div className="w-20 h-20 flex flex-col items-center justify-center rounded-xl text-light bg-accent">
      <span className="text-xs md:text-sm font-semibold">{month}</span>
      <span className="text-xl md:text-2xl font-bold">{year}</span>
      <span className="text-xs md:text-sm">{day}</span>
    </div>
  )
}

export default ExpenseItemDate
