interface Props {
  value: number; // 0-100
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  label?: string;
  showPercent?: boolean;
}

export function ProgressRing({
  value,
  size = 56,
  strokeWidth = 5,
  color = '#6366f1',
  trackColor = 'rgba(61,61,78,0.3)',
  label,
  showPercent = true,
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          style={{ animation: 'ringFill 1s ease-out' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {showPercent && (
          <span className="text-white font-black text-xs leading-none">{Math.round(value)}%</span>
        )}
        {label && (
          <span className="text-zinc-500 text-[8px] font-semibold leading-none mt-0.5">{label}</span>
        )}
      </div>
    </div>
  );
}
