type CardProps = {
  className: string;
  tagName?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ className, tagName, children }) => {
  const CardTag = tagName ? tagName : "div";

  return (
    <CardTag className={className ? className + " card" : "card"}>
      {children}
    </CardTag>
  );
};

export default Card;
