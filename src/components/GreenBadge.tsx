interface GreenBadgeProps {
  distance: number;
  name: string;
  color: string;
  unlocked: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function GreenBadge({ distance, name, color, unlocked, size = 'md' }: GreenBadgeProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-[10px]',
    md: 'w-16 h-16 text-xs',
    lg: 'w-24 h-24 text-base',
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold text-white shadow-md relative ${
          unlocked ? `bg-gradient-to-br ${color}` : 'bg-gray-300'
        }`}
      >
        <div className="text-center">
          <div className={size === 'lg' ? 'text-2xl' : 'text-base'}>{distance}</div>
          <div className={size === 'lg' ? 'text-xs' : 'text-[8px]'}>km</div>
        </div>
        {unlocked && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs">
            ✓
          </div>
        )}
      </div>
      <div className="text-center">
        <div className={`font-medium ${size === 'lg' ? 'text-sm' : 'text-[10px]'} text-navy`}>{name}</div>
        <div className={`${size === 'lg' ? 'text-xs' : 'text-[9px]'} text-muted`}>{distance} km</div>
      </div>
    </div>
  );
}
