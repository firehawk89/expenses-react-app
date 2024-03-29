import { FC } from 'react'
import Card from '../UI/Card'
import ChartBar from './ChartBar'
import styles from './Chart.module.scss'
import ChartItem from '../../types/ChartItem'
import { classnames } from '../../utils/misc'

type ChartProps = { data: ChartItem[] }

const Chart: FC<ChartProps> = ({ data }) => {
  const dataItemsValues = data.map((item) => item.value)
  const totalSum = dataItemsValues.reduce((a, b) => a + b, 0)

  return (
    <Card
      className={classnames(
        'p-5 flex flex-wrap gap-y-4 bg-light',
        styles.chart
      )}
    >
      {data.map((item) => (
        <ChartBar key={item.label} data={item} total={totalSum} />
      ))}
    </Card>
  )
}

export default Chart
