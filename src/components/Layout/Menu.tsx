import { FC } from 'react'
import { baseUrl } from '../../utils/constants'
import MenuItem from './MenuItem'

const Menu: FC = () => {
  return (
    <ul className="flex items-center gap-8 ">
      <MenuItem link={baseUrl}>Home</MenuItem>
      <MenuItem link={`${baseUrl}login`}>Log In</MenuItem>
      <MenuItem link={`${baseUrl}register`}>Register</MenuItem>
    </ul>
  )
}

export default Menu
