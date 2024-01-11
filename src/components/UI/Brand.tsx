import { FC } from 'react'
import logo from '../../assets/img/logo.png'

const Brand: FC = () => {
  return (
    <div className="flex items-center gap-3">
      <img className="w-12 h-12" src={logo} alt="Expenses React App Logo" />
      <span className="block font-medium">Expense Tracker</span>
    </div>
  )
}

export default Brand
