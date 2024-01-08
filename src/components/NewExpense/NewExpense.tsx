import { FC, useState } from 'react'
import useHttpRequest from '../../hooks/use-http-request'
import Expense from '../../types/models/expense-model'
import Card from '../UI/Card'
import Button from '../UI/Button'
import NewExpenseForm from './NewExpenseForm'
import { dbUrl } from '../../utils/constants'

type NewExpenseProps = {
  onAddExpense: (expense: Expense) => void
}

const NewExpense: FC<NewExpenseProps> = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const { isLoading, sendRequest: addExpense } = useHttpRequest()

  const createExpense = (
    enteredExpenseData: Expense,
    expenseData: { name: string }
  ) => {
    const generatedId = expenseData.name // firebase-specific => "name" contains generated id
    const createdExpense = new Expense(
      generatedId,
      enteredExpenseData.title,
      enteredExpenseData.amount,
      enteredExpenseData.date
    )

    onAddExpense(createdExpense)
    setIsEditing(false)
  }

  const saveExpenseData = async (enteredExpenseData: Expense) => {
    addExpense(
      {
        url: `${dbUrl}/expenses.json`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          title: enteredExpenseData.title,
          amount: enteredExpenseData.amount,
          date: enteredExpenseData.date.toISOString().split('T')[0],
        },
      },

      createExpense.bind(null, enteredExpenseData)
    )
  }

  const startEditing = () => {
    setIsEditing(true)
  }

  const stopEditing = () => {
    setIsEditing(false)
  }

  return (
    <Card className="p-4 mx-auto max-w-[50rem] text-center bg-background">
      {!isEditing ? (
        <Button type="button" onClick={startEditing}>
          Add New Expense
        </Button>
      ) : (
        <NewExpenseForm
          isLoading={isLoading}
          onSubmit={saveExpenseData}
          onCancel={stopEditing}
        />
      )}
    </Card>
  )
}

export default NewExpense
