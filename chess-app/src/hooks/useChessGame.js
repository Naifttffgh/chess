import { useState, useCallback } from 'react';
import { Chess } from 'chess.js';

export const useChessGame = () => {
  const [game, setGame] = useState(new Chess());

  const makeMove = useCallback((move) => {
    try {
      const result = game.move(move);
      if (result) {
        setGame(new Chess(game.fen())); // تحديث الحالة لفرض إعادة الريندر
        return result;
      }
    } catch (e) {
      return null;
    }
  }, [game]);

  const resetGame = () => {
    const newGame = new Chess();
    setGame(newGame);
    return newGame.fen();
  };

  return {
    fen: game.fen(),
    history: game.history({ verbose: true }),
    makeMove,
    resetGame,
    isGameOver: game.isGameOver(),
  };
};