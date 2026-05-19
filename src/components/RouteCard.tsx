import { motion } from 'framer-motion';
import { Bus, Clock, DollarSign, Users } from 'lucide-react';

interface RouteCardProps {
  route: {
    name: string;
    transfer: string;
    from: string;
    to: string;
    duration: string;
    price: string;
    crowdLevel: string;
    nextArrival: string;
  };
}

export default function RouteCard({ route }: RouteCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card p-4 space-y-3"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Bus size={20} className="text-white" />
          </div>
          <div>
            <div className="font-semibold text-navy">{route.name}</div>
            <div className="text-xs text-muted">{route.transfer}</div>
          </div>
        </div>
      </div>

      <div className="text-sm text-navy">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span>{route.from}</span>
        </div>
        <div className="ml-1 border-l-2 border-dashed border-gray-300 h-4" />
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          <span>{route.to}</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-1 text-muted">
          <Clock size={14} />
          <span>{route.duration}</span>
        </div>
        <div className="flex items-center gap-1 text-muted">
          <DollarSign size={14} />
          <span>{route.price}</span>
        </div>
        <div className="flex items-center gap-1 text-muted">
          <Users size={14} />
          <span>{route.crowdLevel}</span>
        </div>
      </div>

      <div className="bg-primary-light rounded-lg p-2 text-xs text-primary font-medium">
        Xe sắp đến: {route.nextArrival}
      </div>
    </motion.div>
  );
}
