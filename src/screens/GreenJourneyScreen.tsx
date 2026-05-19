import { ArrowLeft, Info, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import GreenBadge from '../components/GreenBadge';
import ProgressBar from '../components/ProgressBar';
import RobotBuddy from '../components/RobotBuddy';
import { mockData } from '../data/mockData';

interface GreenJourneyScreenProps {
  onNavigate: (screen: string) => void;
}

export default function GreenJourneyScreen({ onNavigate }: GreenJourneyScreenProps) {
  const nextBadge = mockData.badges.find(b => !b.unlocked) || mockData.badges[1];
  const progress = (mockData.user.totalDistance / nextBadge.distance) * 100;

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-white border-b border-border px-4 py-4 flex items-center justify-between sticky top-0 z-10">
        <button onClick={() => onNavigate('home')} className="p-2 -ml-2">
          <ArrowLeft size={24} className="text-navy" />
        </button>
        <h1 className="text-lg font-bold text-navy">Hành trình xanh 🌱</h1>
        <button className="p-2 -mr-2">
          <Info size={24} className="text-muted" />
        </button>
      </div>

      <div className="px-4 space-y-4 mt-4">
        {/* Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-gradient p-5 space-y-4"
        >
          <div className="text-center">
            <div className="text-sm text-muted mb-1">Tổng quãng đường của bạn</div>
            <div className="text-4xl font-bold text-primary mb-2">{mockData.user.totalDistance} km</div>
            <div className="text-sm text-navy">Cùng bạn kiến tạo đô thị xanh!</div>
          </div>

          {/* Illustration */}
          <div className="relative h-28 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 300 120">
              <path d="M 0 70 Q 75 50 150 70 T 300 70" stroke="#00896B" strokeWidth="4" fill="none" />
              <circle cx="40" cy="85" r="10" fill="#22C55E" />
              <circle cx="80" cy="85" r="10" fill="#22C55E" />
              <circle cx="120" cy="85" r="8" fill="#86EFAC" />
              <rect x="200" y="45" width="50" height="30" rx="5" fill="#00896B" />
              <rect x="206" y="52" width="10" height="10" rx="2" fill="white" />
              <rect x="234" y="52" width="10" height="10" rx="2" fill="white" />
              <rect x="210" y="75" width="30" height="5" rx="2.5" fill="#333" />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">{mockData.user.co2Saved} kg</div>
              <div className="text-xs text-muted">CO₂ đã giảm</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">{mockData.user.moneySaved.toLocaleString()} đ</div>
              <div className="text-xs text-muted">Tiết kiệm được</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">{mockData.user.tripCount}</div>
              <div className="text-xs text-muted">Số chuyến đi</div>
            </div>
          </div>
        </motion.div>

        {/* Weekly Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card p-5 space-y-4"
        >
          <h3 className="font-bold text-navy">TIẾN ĐỘ TUẦN NÀY</h3>
          <ProgressBar current={mockData.user.totalDistance} total={mockData.user.weeklyGoal} showLabel={false} />
          <div className="flex justify-between items-center">
            <span className="text-sm text-navy font-medium">{mockData.user.totalDistance} / {mockData.user.weeklyGoal} km</span>
            <span className="text-sm text-primary font-medium">
              {Math.round((mockData.user.totalDistance / mockData.user.weeklyGoal) * 100)}%
            </span>
          </div>
          <div className="text-xs text-muted text-center">
            Bạn đã hoàn thành {Math.round((mockData.user.totalDistance / mockData.user.weeklyGoal) * 100)}% mục tiêu tuần
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card p-5 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-navy">HUY HIỆU XANH</h3>
            <button className="flex items-center gap-1 text-xs text-primary font-medium">
              Xem tất cả <ExternalLink size={12} />
            </button>
          </div>
          <div className="flex items-center justify-between gap-2">
            {mockData.badges.map((badge) => (
              <GreenBadge
                key={badge.id}
                distance={badge.distance}
                name={badge.name}
                color={badge.color}
                unlocked={badge.unlocked}
                size="sm"
              />
            ))}
          </div>
        </motion.div>

        {/* Next Milestone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card p-5 space-y-4"
        >
          <h3 className="font-bold text-navy">MỐC TIẾP THEO</h3>
          <div className="flex items-center gap-4">
            <GreenBadge
              distance={nextBadge.distance}
              name={nextBadge.name}
              color={nextBadge.color}
              unlocked={false}
              size="lg"
            />
            <div className="flex-1 space-y-2">
              <div>
                <div className="text-sm font-semibold text-navy">Huy hiệu {nextBadge.name}</div>
                <div className="text-xs text-muted">{nextBadge.distance} km</div>
              </div>
              <ProgressBar current={mockData.user.totalDistance} total={nextBadge.distance} showLabel={false} />
              <div className="text-xs text-primary font-medium">
                {mockData.user.totalDistance >= nextBadge.distance
                  ? 'Bạn đã vượt mốc này! 🎉'
                  : `${mockData.user.totalDistance} / ${nextBadge.distance} km`}
              </div>
            </div>
          </div>
          {mockData.user.totalDistance >= nextBadge.distance && (
            <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold">
              Nhận huy hiệu
            </button>
          )}
        </motion.div>

        {/* Journey History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card p-5 space-y-3"
        >
          <h3 className="font-bold text-navy">LỊCH SỬ HÀNH TRÌNH</h3>
          <div className="space-y-3">
            {mockData.journeyHistory.map((journey, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <div className="text-sm font-medium text-navy">{journey.date}</div>
                  <div className="text-xs text-muted">+{journey.co2} kg CO₂</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-primary">{journey.distance} km</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Robot Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-primary to-green-600 rounded-[24px] p-5 text-white flex items-start gap-3"
        >
          <div className="flex-shrink-0">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="16" fill="white" fillOpacity="0.2" />
              <circle cx="14" cy="18" r="2" fill="white" />
              <circle cx="26" cy="18" r="2" fill="white" />
              <path d="M 13 24 Q 20 27 27 24" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <div className="text-sm leading-relaxed">
            Tuyệt vời! Bạn đang góp phần xây dựng một tương lai xanh hơn mỗi ngày 💚
          </div>
        </motion.div>

        {/* AI Buddy */}
        <div className="flex justify-center py-4">
          <RobotBuddy onClick={() => onNavigate('ai-buddy')} />
        </div>
      </div>
    </div>
  );
}
