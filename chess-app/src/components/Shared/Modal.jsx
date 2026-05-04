import React from 'react';

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* الخلفية المظلمة */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* جسم النافذة */}
      <div className="relative bg-[#262421] w-full max-w-md rounded-xl border border-white/10 shadow-2xl overflow-hidden animate-slide-up">
        <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-[#2d2b28]">
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">✕</button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};