import { useState, useContext, FC } from 'react'
import ReactDOM from 'react-dom'
import { useMutation } from '@tanstack/react-query'
import { ModalContext } from '../../store/modal-context'
import { queryClient } from '../../store/Providers'
import { deleteExpense } from '../../utils/expenses'
import Expense from '../../types/models/expense-model'
import Modal from '../UI/Modal'
import ExpenseItem from './ExpenseItem'

type ExpensesListProps = {
  expenses: Expense[]
  isLoading: boolean
  error?: string
}

type ExpenseData = {
  expenseId: string
  expenseTitle: string
}

const ExpensesList: FC<ExpensesListProps> = ({
  expenses,
  isLoading,
  error,
}) => {
  const modalCtx = useContext(ModalContext)
  const [expenseData, setExpenseData] = useState<ExpenseData>({
    expenseId: '',
    expenseTitle: '',
  })

  const { mutate } = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['expenses'],
      })
    },
  })

  const modalText = `Are you sure you want to delete expense "${expenseData.expenseTitle}"?`
  const modalTitle = 'Delete expense'

  const displayWarning = (id: string, title: string) => {
    modalCtx.displayModal()
    setExpenseData({ expenseId: id, expenseTitle: title })
  }

  const handleExpenseDelete = async () => {
    const id = expenseData.expenseId
    mutate({ id })
    modalCtx.removeModal()
  }

  let expenseList = (
    <h2 className="mt-8 md:text-xl font-bold text-center">
      Found no expenses.
    </h2>
  )

  if (expenses.length > 0) {
    expenseList = (
      <ul className="list-none">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            data={expense}
            onDelete={displayWarning}
          />
        ))}
      </ul>
    )
  }

  let content = expenseList

  if (isLoading) {
    content = (
      <h2 className="mt-8 md:text-xl font-bold text-center">
        Loading expenses...
      </h2>
    )
  }

  if (error) {
    content = <h2 className="mt-8 md:text-xl font-bold text-center">{error}</h2>
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Modal
          title={modalTitle}
          text={modalText}
          onConfirm={handleExpenseDelete}
        />,
        document.getElementById('modal-root') as HTMLDivElement
      )}
      {content}
    </>
  )
}

export default ExpensesList
