// استدعاء ملف المحرك الرئيسي
importScripts('stockfish-nnue-16.js');

// بدء تشغيل المحرك
self.onmessage = (e) => {
  // تمرير الرسائل من React إلى المحرك المكتوب بلغة C++/Wasm
  self.postMessage(e.data);
};
