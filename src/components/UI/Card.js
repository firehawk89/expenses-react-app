import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className={props.className ? props.className + " card" : "card"}>
      {props.children}
    </div>
  );
};

export default Card;
