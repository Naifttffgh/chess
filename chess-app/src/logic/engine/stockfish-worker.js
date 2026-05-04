// استيراد مكتبة Stockfish 16 (يجب تحميل الملف في public/logic/engine/)
importScripts('/logic/engine/stockfish-nnue-16.js');

// استلام الأوامر من الموقع (من الـ Hook)
onmessage = function(e) {
  const command = e.data;
  // إرسال الأمر للمحرك
  postMessage("الرد من المحرك على: " + command);
};