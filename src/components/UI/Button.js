import React from "react";

const Button = (props) => {
  const { className, type, onClick, children } = props;

  return (
    <button
      className={className ? className + " btn" : "btn"}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
