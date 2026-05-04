import { checkBrilliantMove } from './engine/brilliant-moves';

export const processAnalysis = (oldEval, newEval, lastMove) => {
  const isBrilliant = checkBrilliantMove(oldEval, newEval, lastMove);
  
  return {
    score: newEval,
    label: isBrilliant ? "Brilliant" : "Book",
    accuracy: Math.min(100, Math.max(0, 100 - (oldEval - newEval) * 10))
  };
};