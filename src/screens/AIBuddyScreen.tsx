import { ArrowLeft, Info, Mic, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import RouteCard from '../components/RouteCard';
import RobotBuddy from '../components/RobotBuddy';
import { mockData } from '../data/mockData';

interface AIBuddyScreenProps {
  onNavigate: (screen: string) => void;
}

export default function AIBuddyScreen({ onNavigate }: AIBuddyScreenProps) {
  return (
    <div className="flex flex-col h-full pb-24">
      {/* Header */}
      <div className="bg-white border-b border-border px-4 py-4 flex items-center justify-between sticky top-0 z-10">
        <button onClick={() => onNavigate('home')} className="p-2 -ml-2">
          <ArrowLeft size={24} className="text-navy" />
        </button>
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold text-navy">AI Bus Buddy</h1>
          <span className="bg-primary-light text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
            BETA
          </span>
        </div>
        <button className="p-2 -mr-2">
          <Info size={24} className="text-muted" />
        </button>
      </div>

      {/* Chat Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {/* AI Intro Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3"
        >
          <div className="flex-shrink-0">
            <RobotBuddy showLabel={false} />
          </div>
          <div className="flex-1 bg-white border border-border rounded-2xl rounded-tl-none p-4 space-y-2">
            <div className="text-sm text-navy leading-relaxed">
              Xin chào! 👋<br />
              Mình là <span className="font-semibold">AI Bus Buddy</span>
            </div>
            <div className="text-xs text-muted leading-relaxed">
              Mình có thể giúp bạn tìm tuyến xe, gợi ý lộ trình, cập nhật giao thông và nhiều hơn nữa!
            </div>
          </div>
        </motion.div>

        {/* User Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-end"
        >
          <div className="max-w-[80%] bg-primary text-white rounded-2xl rounded-tr-none p-4">
            <div className="text-sm leading-relaxed">
              Mình đang ở FTU, muốn đến Aeon Mall Long Biên thì đi thế nào?
            </div>
          </div>
        </motion.div>

        {/* AI Response */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-start gap-3"
        >
          <div className="flex-shrink-0">
            <RobotBuddy showLabel={false} />
          </div>
          <div className="flex-1 space-y-3">
            <div className="bg-white border border-border rounded-2xl rounded-tl-none p-4">
              <div className="text-sm text-navy leading-relaxed">
                Từ FTU đến Aeon Mall Long Biên mình gợi ý cho bạn <span className="font-semibold">3 lựa chọn tối ưu</span> nhé:
              </div>
            </div>

            {/* Route Cards */}
            <div className="space-y-3">
              {mockData.routes.map((route, i) => (
                <motion.div
                  key={route.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <RouteCard route={route} />
                </motion.div>
              ))}
            </div>

            {/* Buddy Tip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-4"
            >
              <div className="flex items-start gap-2">
                <span className="text-lg">💡</span>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-orange-800 mb-1">Gợi ý từ Buddy:</div>
                  <div className="text-xs text-orange-700 leading-relaxed">
                    Nếu bạn muốn ít đông và thoải mái hơn, Bus 08 hoặc Metro 2A + 43 là lựa chọn tốt nhất nhé!
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Suggestion Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-2 pt-2"
        >
          {['Xe nào ít đông nhất?', 'Rẻ nhất?', 'Đi về buổi tối thì sao?'].map((chip, i) => (
            <button
              key={i}
              className="bg-white border border-border text-navy text-xs px-4 py-2 rounded-full hover:bg-primary-light transition-colors"
            >
              {chip}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Input Bar */}
      <div className="bg-white border-t border-border px-4 py-3 sticky bottom-0">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-background border border-border rounded-full px-4 py-3 flex items-center gap-2">
            <input
              type="text"
              placeholder="Bạn muốn đi đâu?"
              className="flex-1 text-sm outline-none bg-transparent"
            />
            <button className="text-muted">
              <Mic size={20} />
            </button>
          </div>
          <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
