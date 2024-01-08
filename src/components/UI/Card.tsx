import { FC, ReactNode } from 'react'

type CardProps = {
  className?: string
  tagName?: keyof JSX.IntrinsicElements
  children: ReactNode
}

const Card: FC<CardProps> = ({ className, tagName, children }) => {
  const CardTag = tagName ? tagName : 'div'

  return (
    <CardTag
      className={
        className
          ? `overflow-hidden rounded-md shadow-card ${className}`
          : 'overflow-hidden rounded-md shadow-card'
      }
    >
      {children}
    </CardTag>
  )
}

export default Card
