import { useState, useEffect, FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getExpenses } from '../utils/expenses'
import Expense from '../types/models/expense-model'
import Expenses from '../components/Expenses/Expenses'
import NewExpense from '../components/NewExpense/NewExpense'

const formatExpenses = (expenses: Expense[]) => {
  const formattedExpenses = []

  for (const expenseKey in expenses) {
    formattedExpenses.push(
      new Expense(
        expenseKey,
        expenses[expenseKey].title,
        expenses[expenseKey].amount,
        new Date(expenses[expenseKey].date)
      )
    )
  }

  return formattedExpenses
}

const HomePage: FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([])

  const { data, isPending, error } = useQuery({
    queryKey: ['expenses'],
    queryFn: ({ signal }) => getExpenses({ signal }),
  })

  useEffect(() => {
    const formattedExpenses = formatExpenses(data)
    setExpenses(formattedExpenses)
  }, [data])

  return (
    <>
      <NewExpense />
      <Expenses data={expenses} isLoading={isPending} error={error?.message} />
    </>
  )
}

export default HomePage
