type CardProps = {
  className?: string;
  tagName?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ className, tagName, children }) => {
  const CardTag = tagName ? tagName : "div";

  return (
    <CardTag
      className={
        className
          ? `overflow-hidden rounded-md shadow-card ${className}`
          : "overflow-hidden rounded-md shadow-card"
      }
    >
      {children}
    </CardTag>
  );
};

export default Card;
