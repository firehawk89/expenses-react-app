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
    <div className="h-24 sm:h-28 flex flex-col items-center gap-1">
      <div className="overflow-hidden h-full w-5 flex flex-col justify-end rounded-xl border border-secondary bg-[#c3b4f3]">
        <div
          className="w-full bg-[#4826b9] transition-all"
          style={{ height: barFillHeight }}
        />
      </div>
      <div className="text-sm font-semibold text-center text-dark">{label}</div>
    </div>
  );
};

export default ChartBar;
