import { Bell, Search, ChevronDown, CreditCard, MapPin, Star, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import GreenBadge from '../components/GreenBadge';
import ProgressBar from '../components/ProgressBar';
import FakeQRCode from '../components/FakeQRCode';
import RobotBuddy from '../components/RobotBuddy';
import { mockData } from '../data/mockData';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="pb-24">
      {/* Hero Header */}
      <div className="relative h-48 bg-gradient-to-br from-green-800 via-green-700 to-green-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 right-8 w-16 h-16 bg-red-400 rounded-full blur-xl" />
          <div className="absolute top-12 right-20 w-12 h-12 bg-red-300 rounded-full blur-lg" />
        </div>

        <div className="relative px-6 pt-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-2xl">🚌</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">BusMap</div>
                <div className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full inline-block">
                  HÀ NỘI
                </div>
              </div>
            </div>
            <button className="text-white">
              <Bell size={24} />
            </button>
          </div>

          <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
            <Search size={20} className="text-muted" />
            <input
              type="text"
              placeholder="Tìm kiếm địa điểm, tuyến xe, điểm dừng..."
              className="flex-1 text-sm outline-none bg-transparent"
            />
          </div>
        </div>
      </div>

      <div className="px-4 space-y-4 mt-4">
        {/* Green Impact Card */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="card p-5 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-navy">TÁC ĐỘNG XANH CỦA BẠN 🌱</h3>
            <button className="flex items-center gap-1 text-xs text-muted">
              Tuần này <ChevronDown size={14} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">{mockData.user.co2Saved} kg</div>
              <div className="text-xs text-muted">CO₂ đã giảm</div>
              <div className="text-xs text-navy">= 3 cây xanh 🌳</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">{mockData.user.moneySaved.toLocaleString()} đ</div>
              <div className="text-xs text-muted">Tiết kiệm được</div>
              <div className="text-xs text-navy">So với đi xe máy</div>
            </div>
          </div>

          <div className="bg-primary-light rounded-xl p-3 text-center">
            <div className="text-sm font-medium text-navy">Quãng đường đi bus: {mockData.user.totalDistance} km</div>
            <div className="text-xs text-muted mt-1">Giảm tắc đường 🚦</div>
          </div>
        </motion.div>

        {/* Green Journey Card */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          onClick={() => onNavigate('journey')}
          className="card-gradient p-5 space-y-4 cursor-pointer"
        >
          <h3 className="font-bold text-navy">HÀNH TRÌNH XANH 🚶 🚌</h3>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-primary">{mockData.user.totalDistance} km</div>
              <div className="text-xs text-muted">Tổng quãng đường</div>
            </div>
            <div className="text-sm text-navy text-right">
              Cùng bạn kiến tạo<br />đô thị xanh!
            </div>
          </div>

          {/* Illustration */}
          <div className="relative h-24 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 300 100">
              <path d="M 0 60 Q 75 40 150 60 T 300 60" stroke="#00896B" strokeWidth="3" fill="none" />
              <circle cx="50" cy="70" r="8" fill="#22C55E" />
              <circle cx="100" cy="70" r="8" fill="#22C55E" />
              <rect x="200" y="40" width="40" height="25" rx="4" fill="#00896B" />
              <rect x="205" y="45" width="8" height="8" rx="1" fill="white" />
              <rect x="227" y="45" width="8" height="8" rx="1" fill="white" />
              <rect x="210" y="65" width="20" height="4" rx="2" fill="#333" />
              <rect x="210" y="65" width="20" height="4" rx="2" fill="#333" />
            </svg>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-medium text-navy">Tiến độ tuần này</div>
            <ProgressBar current={mockData.user.totalDistance} total={mockData.user.weeklyGoal} />
          </div>
        </motion.div>

        {/* Badges Card */}
        <motion.div whileHover={{ scale: 1.01 }} className="card p-5 space-y-4">
          <h3 className="font-bold text-navy">HUY HIỆU XANH CỦA BẠN</h3>
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

        {/* QR Card */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-br from-primary to-green-600 rounded-[24px] p-6 text-white text-center space-y-4"
        >
          <div className="text-sm font-bold">NHẤN ĐỂ QUÉT MÃ TRÊN XE</div>

          <div className="flex justify-center">
            <FakeQRCode />
          </div>

          <button className="bg-white text-primary px-6 py-2 rounded-full text-sm font-semibold">
            Mã QR thanh toán
          </button>

          <div className="text-xs opacity-90">
            Liên kết: {mockData.user.linkedBank}
          </div>
        </motion.div>

        {/* Shortcuts */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: CreditCard, label: 'Quản lý Thẻ & QR' },
            { icon: MapPin, label: 'Tìm đường' },
            { icon: Star, label: 'Trạm xung quanh' },
            { icon: MessageSquare, label: 'Đánh giá ứng dụng' },
          ].map((item, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card p-4 flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
                <item.icon size={24} className="text-primary" />
              </div>
              <span className="text-xs font-medium text-navy text-center">{item.label}</span>
            </motion.button>
          ))}
        </div>

        {/* AI Buddy */}
        <div className="flex justify-center py-4">
          <RobotBuddy onClick={() => onNavigate('ai-buddy')} />
        </div>
      </div>
    </div>
  );
}
