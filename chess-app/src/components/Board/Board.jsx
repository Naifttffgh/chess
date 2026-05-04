import { useChessGame } from '../hooks/useChessGame';
import { Chessboard } from 'react-chessboard';
import { EvalBar } from './Analysis/EvalBar';

export const GameBoard = () => {
  const { fen, makeMove, evaluation, isGameOver } = useChessGame();

  function onDrop(sourceSquare, targetSquare) {
    const move = makeMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });
    return move !== null;
  }

  return (
    <div className="flex gap-4 items-center justify-center p-4">
      {/* شريط التقييم يعمل لحظياً مع بوت ستوك فيش */}
      <EvalBar score={evaluation} />
      
      <div className="w-[600px] relative">
        <Chessboard 
          position={fen} 
          onPieceDrop={onDrop}
          boardOrientation="white" // أنت دائماً الأبيض ضد البوت
        />
        {isGameOver && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-2xl font-bold">
            انتهت اللعبة!
          </div>
        )}
      </div>
    </div>
  );
};
