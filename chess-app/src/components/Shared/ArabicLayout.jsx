import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const ArabicLayout = ({ children }) => {
  return (
    <div dir="rtl" className="min-h-screen bg-[#161512] text-[#bababa] font-sans selection:bg-blue-500/30">
      {/* شريط التنقل العلوي */}
      <Navbar />
      
      {/* المحتوى الرئيسي للموقع */}
      <main className="container mx-auto px-4 py-6 md:py-10 animate-fade-in">
        {children}
      </main>

      {/* تذييل الصفحة */}
      <Footer />
    </div>
  );
};