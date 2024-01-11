import { FC, ReactNode } from 'react'
import { classnames } from '../../utils/misc'

type CardProps = {
  className?: string
  tagName?: keyof JSX.IntrinsicElements
  children: ReactNode
}

const Card: FC<CardProps> = ({ className, tagName, children }) => {
  const CardTag = tagName ? tagName : 'div'

  return (
    <CardTag
      className={classnames(
        'overflow-hidden rounded-md shadow-card',
        className
      )}
    >
      {children}
    </CardTag>
  )
}

export default Card
