import { FC } from "react";

type ExpensesFilterProps = {
  selected: string;
  onSelectedItem: (year: string) => void;
};

const ExpensesFilter: FC<ExpensesFilterProps> = ({
  selected,
  onSelectedItem,
}) => {
  const changeYearHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectedItem(event.target.value);
  };

  return (
    <div className="px-4 text-light">
      <div className="my-5 flex items-center justify-between">
        <label className="font-bold">Filter by year</label>
        <select
          className="py-2 px-6 font-bold rounded-md text-dark"
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
