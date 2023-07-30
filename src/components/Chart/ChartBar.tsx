import styles from "./Chart.module.scss";

type ChartBarProps = {
  total: number;
  value: number;
  label: string;
};

const ChartBar: React.FC<ChartBarProps> = ({ total, value, label }) => {
  let barFillHeight = "0%";

  if (total > 0) {
    barFillHeight = Math.round((value / total) * 100) + "%";
  }

  return (
    <div className={styles["chart-bar"]}>
      <div className={styles["chart-bar-inner"]}>
        <div
          className={styles["chart-bar-fill"]}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles["chart-bar-label"]}>{label}</div>
    </div>
  );
};

export default ChartBar;
