import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expenses__item-date">
      <span className="expenses__item-month">{month}</span>
      <span className="expenses__item-year">{year}</span>
      <span className="expenses__item-day">{day}</span>
    </div>
  );
};

export default ExpenseDate;
