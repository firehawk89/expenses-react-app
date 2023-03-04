import React from "react";

const ChartBar = (props) => {
  const { total, value, label } = props;
  let barFillHeight = "0%";

  if (total > 0) {
    barFillHeight = Math.round((value / total) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
