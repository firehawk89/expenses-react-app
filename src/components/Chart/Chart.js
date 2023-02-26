import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.scss";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const total = dataPointValues.reduce((a, b) => a + b, 0);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          total={total}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
