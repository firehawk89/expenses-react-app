import { useState, useContext, FC } from 'react'
import ReactDOM from 'react-dom'
import { ModalContext } from '../../store/modal-context'
import useHttpRequest from '../../hooks/use-http-request'
import { dbUrl } from '../../utils/constants'
import Expense from '../../types/models/expense-model'
import Modal from '../UI/Modal'
import ExpenseItem from './ExpenseItem'

type ExpensesListProps = {
  expenses: Expense[]
  isLoading: boolean
  error: string | null
  onDeleteItem: (id: string) => void
}

type ExpenseData = {
  expenseId: string
  expenseTitle: string
}

const ExpensesList: FC<ExpensesListProps> = ({
  expenses,
  isLoading,
  error,
  onDeleteItem,
}) => {
  const modalCtx = useContext(ModalContext)
  const [expenseData, setExpenseData] = useState<ExpenseData>({
    expenseId: '',
    expenseTitle: '',
  })
  const { sendRequest: deleteExpense } = useHttpRequest()

  const modalText = `Are you sure you want to delete expense "${expenseData.expenseTitle}"?`
  const modalTitle = 'Delete expense'

  const displayWarning = (id: string, title: string) => {
    modalCtx.displayModal()
    setExpenseData({ expenseId: id, expenseTitle: title })
  }

  const removeExpense = (expenseId: string) => {
    modalCtx.removeModal()
    onDeleteItem(expenseId)
  }

  const handleExpenseDelete = async () => {
    deleteExpense(
      {
        url: `${dbUrl}/expenses/${expenseData.expenseId}.json`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },

      removeExpense.bind(null, expenseData.expenseId)
    )
  }

  let expenseList = (
    <h2 className="mt-8 md:text-xl font-bold text-center text-light">
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
      <h2 className="mt-8 md:text-xl font-bold text-center text-light">
        Loading expenses...
      </h2>
    )
  }

  if (error) {
    content = (
      <h2 className="mt-8 md:text-xl font-bold text-center text-light">
        {error}
      </h2>
    )
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
