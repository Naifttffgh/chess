import React from 'react';

export const AdvantageChart = ({ history }) => {
  // محاكاة لرسم بياني بسيط باستخدام CSS/SVG
  // 'history' عبارة عن مصفوفة من أرقام التقييم بعد كل نقلة
  const points = history.map((score, i) => `${(i / (history.length - 1)) * 100},${50 - (score * 10)}`).join(' ');

  return (
    <div className="w-full h-24 bg-[#1e1c1a] rounded-md mt-4 relative p-1 border border-slate-700">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        {/* خط المنتصف (التعادل) */}
        <line x1="0" y1="50" x2="100" y2="50" stroke="#403d39" strokeWidth="0.5" />
        {/* خط الأفضلية */}
        <polyline
          fill="none"
          stroke="#47abff"
          strokeWidth="1.5"
          points={points}
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute top-1 right-2 text-[10px] text-gray-500">مخطط الأفضلية</div>
    </div>
  );
};