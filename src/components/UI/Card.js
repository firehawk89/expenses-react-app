import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { className, children } = props;

  return (
    <div className={className ? className + " card" : "card"}>{children}</div>
  );
};

export default Card;
