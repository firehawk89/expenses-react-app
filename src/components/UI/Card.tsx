import styles from "./Card.module.scss";

type CardProps = {
  className: string;
  tagName?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ className, tagName, children }) => {
  const CardTag = tagName ? tagName : "div";

  return (
    <CardTag
      className={className ? `${className} ${styles.card}` : styles.card}
    >
      {children}
    </CardTag>
  );
};

export default Card;
