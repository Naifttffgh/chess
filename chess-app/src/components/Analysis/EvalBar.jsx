import React from 'react';

export const EvalBar = ({ score }) => {
  // تحويل التقييم البرمجي إلى نسبة مئوية (المدى الافتراضي -5 إلى +5)
  const calculateHeight = (val) => {
    const min = -5;
    const max = 5;
    const percentage = ((val - min) / (max - min)) * 100;
    return Math.min(Math.max(percentage, 0), 100);
  };

  const whiteHeight = calculateHeight(score);

  return (
    <div className="flex flex-col items-center h-[600px] w-8 bg-[#262421] rounded-sm overflow-hidden relative border border-slate-700">
      {/* جزء التقييم للأسود (في الأعلى) */}
      <div className="w-full bg-[#262421] transition-all duration-300 ease-out" style={{ height: `${100 - whiteHeight}%` }} />
      {/* جزء التقييم للأبيض (في الأسفل) */}
      <div className="w-full bg-white transition-all duration-300 ease-out" style={{ height: `${whiteHeight}%` }} />
      
      {/* الرقم الظاهر على الشريط */}
      <span className={`absolute w-full text-center font-bold text-xs z-10 ${score >= 0 ? 'bottom-2 text-black' : 'top-2 text-white'}`}>
        {score > 0 ? `+${score}` : score}
      </span>
    </div>
  );
};