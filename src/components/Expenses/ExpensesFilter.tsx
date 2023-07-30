import styles from "./Expenses.module.scss";

type ExpensesFilterProps = {
  selected: string;
  onSelectedItem: (year: string) => void;
};

const ExpensesFilter: React.FC<ExpensesFilterProps> = ({
  selected,
  onSelectedItem,
}) => {
  const changeYearHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectedItem(event.target.value);
  };

  return (
    <div className={styles["expenses-filter"]}>
      <div className={styles["expenses-filter-control"]}>
        <label className={styles["expenses-filter-label"]}>
          Filter by year
        </label>
        <select
          className={styles["expenses-filter-select"]}
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
