const Button = ({ className, type, disabled, onClick, children }) => {
  return (
    <button
      className={className ? className + " btn" : "btn"}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
