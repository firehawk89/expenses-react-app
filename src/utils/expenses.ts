import Expense from '../types/models/expense-model'
import HttpError from './HttpError'
import { dbUrl } from './constants'

type RequestConfig = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: { [key: string]: string }
  body?: any
  signal?: AbortSignal
}

export const getExpenses = async ({ signal }: RequestConfig) => {
  const response = await fetch(`${dbUrl}/expenses.json`, {
    method: 'GET',
    signal,
  })

  if (!response.ok) {
    const message = await response.json()
    throw new HttpError(message || 'Failed to fetch expenses!', response.status)
  }

  const data = await response.json()

  return data
}

export const addExpense = async (expense: Expense) => {
  const response = await fetch(`${dbUrl}/expenses.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: expense.title,
      amount: expense.amount,
      date: expense.date.toISOString().split('T')[0],
    }),
  })

  if (!response.ok) {
    const message = await response.json()
    throw new HttpError(message || 'Failed to add expense!', response.status)
  }

  const data = await response.json()

  return data
}

export const deleteExpense = async ({ id }: { id: string }) => {
  const response = await fetch(`${dbUrl}/expenses/${id}.json`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    const message = await response.json()
    throw new HttpError(message || 'Failed to delete expense!', response.status)
  }

  const data = await response.json()

  return data
}
