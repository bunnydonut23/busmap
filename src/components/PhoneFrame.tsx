import { type ReactNode } from 'react';
import StatusBar from './StatusBar';

interface PhoneFrameProps {
  children: ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[430px] bg-white rounded-[40px] shadow-2xl overflow-hidden">
        <StatusBar />
        <div className="bg-background overflow-y-auto" style={{ height: 'calc(100vh - 100px)', maxHeight: '844px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
