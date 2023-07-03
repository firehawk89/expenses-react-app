import React from "react";

const Card = (props) => {
  const { className, children } = props;
  const CardTag = props.tagName ? props.tagName : "div";

  return (
    <CardTag className={className ? className + " card" : "card"}>
      {children}
    </CardTag>
  );
};

export default Card;
