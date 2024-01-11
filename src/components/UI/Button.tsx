import { FC, MouseEvent, ReactNode } from 'react'
import { classnames } from '../../utils/misc'

type ButtonProps = {
  className?: string
  children?: ReactNode
  id?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  id,
  type,
  disabled,
  onClick,
}) => {
  return (
    <button
      id={id}
      className={classnames(
        'py-3.5 px-7 md:py-4 md:px-8 w-fit rounded-xl text-light bg-accent hover:bg-accent-light active:bg-accent-light disabled:bg-opacity-80 transition-all',
        className
      )}
      type={type || 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
