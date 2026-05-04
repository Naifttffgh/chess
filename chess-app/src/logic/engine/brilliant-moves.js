/**
 * تحديد ما إذا كانت النقلة "عبقرية"
 * المعايير: التضحية بقطعة مع تحسن التقييم بشكل ملحوظ
 */
export const checkBrilliantMove = (prevEval, currentEval, move) => {
  const evalDiff = currentEval - prevEval;
  
  // إذا زاد التقييم بأكثر من 0.5 وكانت هناك تضحية بقطعة
  if (evalDiff > 0.5 && move.captured) {
    return true;
  }
  return false;
};