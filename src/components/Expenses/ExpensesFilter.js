import React from "react";

const ExpensesFilter = ({ selected, onSelectedItem }) => {
  const changeYearHandler = (event) => {
    onSelectedItem(event.target.value);
  };

  return (
    <div className="expenses__filter">
      <div className="expenses__filter-control">
        <label className="expenses__filter-label">Filter by year</label>
        <select
          className="expenses__filter-select"
          value={selected}
          onChange={changeYearHandler}
        >
          <option value="none">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
