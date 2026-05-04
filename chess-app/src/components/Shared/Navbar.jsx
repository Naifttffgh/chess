import React from 'react';

export const Navbar = () => {
  return (
    <nav className="bg-[#262421] border-b border-white/5 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-black text-white tracking-tighter cursor-pointer">
            شطرنج<span className="text-blue-500">برو</span>
          </h1>
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li className="hover:text-white cursor-pointer transition-colors">العب</li>
            <li className="text-white border-b-2 border-blue-500 pb-1">التحليل</li>
            <li className="hover:text-white cursor-pointer transition-colors">دروس</li>
          </ul>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-xs text-left hidden sm:block">
            <div className="text-white font-bold">حسابي</div>
            <div className="text-gray-500">تصنيف: 1850</div>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-md flex items-center justify-center text-white font-bold">
            U
          </div>
        </div>
      </div>
    </nav>
  );
};