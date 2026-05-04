/**
 * تهيئة نظام الصوت عند أول تفاعل
 */
export const initAudioSystem = async () => {
  try {
    const silence = new Audio('/sounds/Silence.mp3');
    await silence.play();
    console.log("نظام الصوت يعمل بنجاح");
  } catch (err) {
    console.warn("المتصفح يمنع التشغيل التلقائي للصوت");
  }
};

/**
 * تشغيل صوت محدد بناءً على نوع الحركة
 */
export const playChessSound = (type) => {
  // الأنواع المتاحة: move, capture, check, castle
  const audio = new Audio(`/sounds/${type}.mp3`);
  audio.play().catch(e => console.error("خطأ في تشغيل الصوت:", e));
};