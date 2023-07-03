import Card from "../UI/Card";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const total = dataPointValues.reduce((a, b) => a + b, 0);

  return (
    <Card className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          total={total}
          label={dataPoint.label}
        />
      ))}
    </Card>
  );
};

export default Chart;
