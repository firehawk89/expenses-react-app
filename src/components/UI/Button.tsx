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
      className={
        className
          ? `py-3.5 px-7 md:py-4 md:px-8 w-fit rounded-xl text-light bg-accent hover:bg-accent-light active:bg-accent-light disabled:bg-opacity-80 transition-all ${className}`
          : "py-3.5 px-7 md:py-4 md:px-8 w-fit rounded-xl text-light bg-accent hover:bg-accent-light active:bg-accent-light disabled:bg-opacity-80 transition-all"
      }
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
