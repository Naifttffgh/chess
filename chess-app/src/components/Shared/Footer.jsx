import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#161512] border-t border-white/5 py-8 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          تم التطوير باستخدام <span className="text-blue-500">Stockfish 16</span> و <span className="text-blue-500">Firebase</span>
        </p>
        <p className="text-[10px] text-gray-700 mt-2 uppercase tracking-widest">
          جميع الحقوق محفوظة © 2026
        </p>
      </div>
    </footer>
  );
};