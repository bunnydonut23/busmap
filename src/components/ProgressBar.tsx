interface ProgressBarProps {
  current: number;
  total: number;
  showLabel?: boolean;
}

export default function ProgressBar({ current, total, showLabel = true }: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className="w-full">
      <div className="relative w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-green-500 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between mt-2 text-xs text-muted">
          <span>{current} km</span>
          <span>{total} km</span>
        </div>
      )}
    </div>
  );
}
