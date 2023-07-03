import React from "react";

const Card = ({ className, tagName, children }) => {
  const CardTag = tagName ? tagName : "div";

  return (
    <CardTag className={className ? className + " card" : "card"}>
      {children}
    </CardTag>
  );
};

export default Card;
