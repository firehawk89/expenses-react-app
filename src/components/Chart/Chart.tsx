import { FC } from "react";
import Card from "../UI/Card";
import ChartBar from "./ChartBar";
import styles from "./Chart.module.scss";
import ChartItem from "../../types/ChartItem";

type ChartProps = { data: ChartItem[] };

const Chart: FC<ChartProps> = ({ data }) => {
  const dataItemsValues = data.map((item) => item.value);
  const totalSum = dataItemsValues.reduce((a, b) => a + b, 0);

  return (
    <Card className={`p-5 flex flex-wrap gap-y-4 bg-[#f8dfff] ${styles.chart}`}>
      {data.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          total={totalSum}
          label={item.label}
        />
      ))}
    </Card>
  );
};

export default Chart;
