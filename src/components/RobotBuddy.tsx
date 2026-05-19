import { motion } from 'framer-motion';

interface RobotBuddyProps {
  onClick?: () => void;
  showLabel?: boolean;
}

export default function RobotBuddy({ onClick, showLabel = true }: RobotBuddyProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <div className="flex items-center gap-3 bg-white border border-border rounded-full px-4 py-3 shadow-lg">
        <div className="relative">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            {/* Robot head */}
            <circle cx="20" cy="20" r="16" fill="#00896B" />
            <circle cx="20" cy="20" r="16" fill="url(#robotGradient)" />
            {/* Eyes */}
            <circle cx="14" cy="18" r="3" fill="white" />
            <circle cx="26" cy="18" r="3" fill="white" />
            <circle cx="15" cy="18" r="1.5" fill="#10284A" />
            <circle cx="27" cy="18" r="1.5" fill="#10284A" />
            {/* Smile */}
            <path
              d="M 13 24 Q 20 28 27 24"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Antenna */}
            <line x1="20" y1="4" x2="20" y2="8" stroke="#00896B" strokeWidth="2" />
            <circle cx="20" cy="3" r="2" fill="#FFD700" />
            <defs>
              <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00896B" />
                <stop offset="100%" stopColor="#00B894" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {showLabel && (
          <div className="text-left">
            <div className="text-xs font-semibold text-navy">AI Bus Buddy</div>
            <div className="text-[10px] text-muted">Nhấn để chat</div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
