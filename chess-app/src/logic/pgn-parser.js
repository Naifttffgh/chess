import { Chess } from 'chess.js';

/**
 * تحويل نص PGN إلى مصفوفة من النقلات والوضعيات (FEN)
 */
export const parsePGN = (pgnText) => {
  const chess = new Chess();
  try {
    chess.loadPgn(pgnText);
    const history = chess.history({ verbose: true });
    
    // إعادة بناء الخطوات للتحليل
    const analysisSteps = history.map(move => ({
      san: move.san,
      fen: move.after,
      from: move.from,
      to: move.to
    }));

    return { 
      success: true, 
      steps: analysisSteps,
      header: chess.header() 
    };
  } catch (error) {
    return { success: false, error: "فشل في قراءة ملف PGN" };
  }
};