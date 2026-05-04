import { useState, useEffect } from 'react';

export const useStockfish = (fen) => {
  const [bestMove, setBestMove] = useState(null);
  const [evaluation, setEvaluation] = useState(0);

  useEffect(() => {
    // استدعاء ملف الـ Worker من مجلد public
    const engine = new Worker('/logic/engine/stockfish.worker.js');

    engine.onmessage = (e) => {
      const line = e.data;
      
      // تحليل سطر التقييم (Evaluation)
      if (line.includes('score cp')) {
        const score = line.split('score cp ')[1]?.split(' ')[0];
        setEvaluation(parseInt(score) / 100);
      }
      
      // استقبال أفضل نقلة (Best Move)
      if (line.includes('bestmove')) {
        const move = line.split('bestmove ')[1]?.split(' ')[0];
        setBestMove(move);
      }
    };

    // إرسال الأوامر للمحرك
    engine.postMessage('uci');
    engine.postMessage(`position fen ${fen}`);
    engine.postMessage('go depth 18'); // عمق البحث 18 لضمان سرعة الرد

    return () => engine.terminate(); // إغلاق المحرك عند تغيير الوضعية لتوفير الموارد
  }, [fen]);

  return { bestMove, evaluation };
};
