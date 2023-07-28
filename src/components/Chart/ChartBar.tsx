const ChartBar = ({ total, value, label }) => {
  let barFillHeight = "0%";

  if (total > 0) {
    barFillHeight = Math.round((value / total) * 100) + "%";
  }

  return (
    <div className="chart__bar">
      <div className="chart__bar-inner">
        <div
          className="chart__bar-fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart__bar-label">{label}</div>
    </div>
  );
};

export default ChartBar;
