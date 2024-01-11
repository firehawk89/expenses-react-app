import { FC } from 'react'
import ChartItem from '../../types/ChartItem'

type ChartBarProps = {
  data: ChartItem
  total: number
}

const ChartBar: FC<ChartBarProps> = ({ data, total }) => {
  const { label, value } = data

  let barFillHeight = '0%'

  if (total > 0) {
    const percentage = Math.round((value / total) * 100)
    barFillHeight = `${percentage}%`
  }

  return (
    <div className="h-24 sm:h-28 flex flex-col items-center gap-1">
      <div className="overflow-hidden h-full w-5 flex flex-col justify-end rounded-xl border border-light bg-accent-light bg-opacity-50">
        <div
          className="w-full bg-accent bg-opacity-85 transition-all"
          style={{ height: barFillHeight }}
        />
      </div>
      <div className="text-sm font-semibold text-center">{label}</div>
    </div>
  )
}

export default ChartBar
