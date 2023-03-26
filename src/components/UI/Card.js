import React from "react";

const Card = (props) => {
  const { className, children } = props;
  const CardTag = props.tagName ? props.tagName : "div";
  const classes = className ? className + " card" : "card";

  return <CardTag className={classes}>{children}</CardTag>;
};

export default Card;
