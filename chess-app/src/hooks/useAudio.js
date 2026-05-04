import { useCallback } from 'react';

export const useAudio = () => {
  const playSound = useCallback((type) => {
    // استدعاء ملفات mp3 من المسار العام public/sounds/
    const audio = new Audio(`/sounds/${type}.mp3`);
    audio.play().catch(() => {
      console.log("Audio play blocked by browser");
    });
  }, []);

  return { playSound };
};