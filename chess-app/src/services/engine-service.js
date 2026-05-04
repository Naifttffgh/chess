/**
 * إرسال الوضعية للتحليل عبر API المشروع في Vercel
 */
export const getCloudAnalysis = async (fen) => {
  try {
    const response = await fetch('/api/engine-proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fen, depth: 18 })
    });
    return await response.json();
  } catch (error) {
    console.error("فشل التحليل السحابي:", error);
    return null;
  }
};