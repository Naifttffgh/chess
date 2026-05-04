import { useState, useEffect, useRef } from 'react';

export const useStockfish = (fen) => {
  const [evaluation, setEvaluation] = useState(0);
  const [bestMove, setBestMove] = useState('');
  const workerRef = useRef(null);

  useEffect(() => {
    // تهيئة الـ Worker الخاص بالمحرك من مجلد logic
    workerRef.current = new Worker('/logic/engine/stockfish.worker.js');

    workerRef.current.onmessage = (e) => {
      const line = e.data;
      if (line.includes('score cp')) {
        const score = parseInt(line.split('score cp ')[1]) / 100;
        setEvaluation(score);
      } else if (line.includes('bestmove')) {
        setBestMove(line.split('bestmove ')[1].split(' ')[0]);
      }
    };

    return () => workerRef.current.terminate();
  }, []);

  useEffect(() => {
    if (workerRef.current && fen) {
      workerRef.current.postMessage(`position fen ${fen}`);
      workerRef.current.postMessage('go depth 15'); // تحديد العمق
    }
  }, [fen]);

  return { evaluation, bestMove };
};