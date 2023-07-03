const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expenses__item-date">
      <span className="expenses__item-month">{month}</span>
      <span className="expenses__item-year">{year}</span>
      <span className="expenses__item-day">{day}</span>
    </div>
  );
};

export default ExpenseDate;
