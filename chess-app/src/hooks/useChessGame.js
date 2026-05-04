import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { useStockfish } from './useStockfish';

export const useChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const { bestMove, evaluation } = useStockfish(game.fen());

  // تنفيذ نقلة البوت
  useEffect(() => {
    if (game.turn() === 'b' && bestMove && !game.isGameOver()) {
      const timer = setTimeout(() => {
        const newGame = new Chess(game.fen());
        newGame.move(bestMove);
        setGame(newGame);
      }, 600); // تأخير بسيط ليبدو اللعب واقعياً
      return () => clearTimeout(timer);
    }
  }, [bestMove, game]);

  return { fen: game.fen(), evaluation, game };
};
