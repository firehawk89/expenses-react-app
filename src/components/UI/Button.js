import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      className={props.className ? props.className + " btn" : "btn"}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
