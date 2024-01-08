import { FC } from "react";
import Card from "../UI/Card";
import ChartBar from "./ChartBar";
import styles from "./Chart.module.scss";

type ChartProps = { dataPoints: { label: string; value: number }[] };

const Chart: FC<ChartProps> = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const total = dataPointValues.reduce((a, b) => a + b, 0);

  return (
    <Card className={`p-5 flex flex-wrap gap-y-4 bg-[#f8dfff] ${styles.chart}`}>
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
