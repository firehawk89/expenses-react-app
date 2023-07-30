import styles from "./Button.module.scss";

type ButtonProps = {
  id?: string;
  type: "button" | "submit" | "reset";
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  id,
  className,
  type,
  disabled,
  onClick,
  children,
}) => {
  return (
    <button
      id={id}
      className={className ? `${className} ${styles.btn}` : styles.btn}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
