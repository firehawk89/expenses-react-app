import React from "react";

const Card = (props) => {
  const { className, children } = props;

  return (
    <div className={className ? className + " card" : "card"}>{children}</div>
  );
};

export default Card;
