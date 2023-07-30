import Card from "../UI/Card";
import ChartBar from "./ChartBar";
import styles from "./Chart.module.scss";

type ChartProps = { dataPoints: { label: string; value: number }[] };

const Chart: React.FC<ChartProps> = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const total = dataPointValues.reduce((a, b) => a + b, 0);

  return (
    <Card className={styles.chart}>
      {dataPoints.map((dataPoint) => (
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
