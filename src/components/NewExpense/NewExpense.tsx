import { FC, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../store/Providers'
import { addExpense } from '../../utils/expenses'
import Expense from '../../types/models/expense-model'
import Card from '../UI/Card'
import Button from '../UI/Button'
import NewExpenseForm from './NewExpenseForm'

const NewExpense: FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const { mutate, isPending } = useMutation({
    mutationFn: addExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['expenses'],
      })
    },
  })

  const handleExpenseCreate = async (enteredExpenseData: Expense) => {
    mutate(enteredExpenseData)
    setIsEditing(false)
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
          isLoading={isPending}
          onSubmit={handleExpenseCreate}
          onCancel={stopEditing}
        />
      )}
    </Card>
  )
}

export default NewExpense
