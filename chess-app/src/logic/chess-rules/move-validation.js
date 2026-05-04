import { Chess } from 'chess.js';

export const validateMove = (fen, move) => {
  const game = new Chess(fen);
  try {
    const result = game.move(move);
    return result ? true : false;
  } catch (e) {
    return false;
  }
};