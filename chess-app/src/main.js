import React, { useEffect } from 'react';
import { ArabicLayout } from './components/Shared/ArabicLayout'; // ضبط الاتجاه العربي
import Board from './components/Board/Board'; // استدعاء الرقعة
import { initAudioSystem } from './services/sound-manager'; // نظام تهيئة الصوت

function MainApp() {
  useEffect(() => {
    // تهيئة نظام الصوت الصامت فور تحميل المكون لفك حظر المتصفح
    initAudioSystem();
  }, []);

  return (
    <ArabicLayout>
      <div className="chess-container">
        {/* المكون الرئيسي للعبة والتحليل */}
        <Board />
      </div>
    </ArabicLayout>
  );
}

export default MainApp;