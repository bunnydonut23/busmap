import { Home, Bell, Heart, User } from 'lucide-react';

interface BottomNavProps {
  active: string;
  onNavigate: (screen: string) => void;
}

export default function BottomNav({ active, onNavigate }: BottomNavProps) {
  const items = [
    { id: 'home', label: 'Trang chủ', icon: Home },
    { id: 'notifications', label: 'Thông báo', icon: Bell },
    { id: 'favorites', label: 'Yêu thích', icon: Heart },
    { id: 'account', label: 'Tài khoản', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border">
      <div className="max-w-[430px] mx-auto flex items-center justify-around py-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-1 transition-colors ${
                isActive ? 'text-primary' : 'text-muted'
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
