export default function FakeQRCode() {
  return (
    <div className="w-32 h-32 bg-white rounded-lg p-2 relative">
      <div className="grid grid-cols-8 grid-rows-8 gap-[2px] w-full h-full">
        {Array.from({ length: 64 }).map((_, i) => (
          <div
            key={i}
            className={`${
              Math.random() > 0.5 ? 'bg-navy' : 'bg-white'
            } rounded-[1px]`}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="6" width="16" height="10" rx="2" fill="#00896B" />
            <circle cx="8" cy="11" r="1" fill="white" />
            <circle cx="16" cy="11" r="1" fill="white" />
            <rect x="10" y="14" width="4" height="2" rx="1" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}
