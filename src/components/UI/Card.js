import React from "react";
import "./Card.scss";

const Card = (props) => {
  let classes;

  if (props.className !== undefined) {
    classes = "card " + props.className;
  } else {
    classes = "card";
  }

  return <div className={classes}>{props.children}</div>;
};

export default Card;
