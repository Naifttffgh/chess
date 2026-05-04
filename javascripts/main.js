/**
 * تهيئة نظام الصوت وفك حظر المتصفح
 * يتم استدعاء ملفات الصمت لضمان تجربة لعب تفاعلية
 */
function initAudio() {
    const silenceAudio = new Audio('/sounds/Silence.mp3');
    
    silenceAudio.play()
        .then(() => {
            console.log("Audio system initialized successfully.");
            // إزالة المستمع بعد التفعيل لمرة واحدة
            document.removeEventListener('click', initAudio);
        })
        .catch(error => {
            console.error("Audio initialization failed:", error);
        });
}

// البدء عند أول تفاعل من المستخدم
document.addEventListener('click', initAudio);