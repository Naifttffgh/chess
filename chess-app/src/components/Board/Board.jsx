import React, { useEffect, useRef } from 'react';
import { Chessground } from 'chessground';
import './PieceTheme.css'; // تحميل تنسيقات القطع
import { boardConfig } from './BoardConfig'; // استيراد الإعدادات

const Board = () => {
  const boardRef = useRef(null);

  useEffect(() => {
    // تهيئة الرقعة عند تحميل المكون
    const cg = Chessground(boardRef.current, boardConfig);
    
    return () => cg.destroy(); // تنظيف الذاكرة عند الإغلاق
  }, []);

  return (
    <div className="board-wrapper">
      <div ref={boardRef} className="cg-board-container" />
    </div>
  );
};

export default Board;