import { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { classnames } from '../../utils/misc'

type MenuItemProps = {
  className?: string
  children: ReactNode
  link: string
}

const MenuItem: FC<MenuItemProps> = ({ className, children, link }) => {
  return (
    <li className={className}>
      <NavLink
        to={link}
        className={({ isActive }) =>
          classnames(
            'no-underline',
            isActive &&
              "relative after:absolute after:content-[''] after:left-0 after:right-0 after:-bottom-1.5 after:w-full after:h-0.5 after:bg-accent"
          )
        }
        end
      >
        {children}
      </NavLink>
    </li>
  )
}

export default MenuItem
