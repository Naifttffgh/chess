import { useState, useCallback, useEffect } from 'react';
import { Chess } from 'chess.js';
import { useStockfish } from './useStockfish'; // استدعاء هوك المحرك

export const useChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const { bestMove, evaluation } = useStockfish(game.fen());

  // دالة تحريك القطع
  const makeMove = useCallback((move) => {
    try {
      const result = game.move(move);
      if (result) {
        setGame(new Chess(game.fen()));
        return result;
      }
    } catch (e) { return null; }
  }, [game]);

  // منطق رد البوت تلقائياً
  useEffect(() => {
    if (game.turn() === 'b' && !game.isGameOver() && bestMove) {
      // تأخير بسيط ليبدو اللعب طبيعياً
      const timer = setTimeout(() => {
        makeMove(bestMove);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [game, bestMove, makeMove]);

  return {
    fen: game.fen(),
    evaluation,
    makeMove,
    isGameOver: game.isGameOver(),
    turn: game.turn()
  };
};
