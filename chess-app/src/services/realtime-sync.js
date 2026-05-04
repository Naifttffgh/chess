import { db } from './firebase-config';
import { doc, updateDoc, onSnapshot } from "firebase/firestore";

/**
 * تحديث وضعية الرقعة في Firebase
 */
export const syncMoveToCloud = async (gameId, fen) => {
  const gameRef = doc(db, "games", gameId);
  await updateDoc(gameRef, {
    fen: fen,
    lastUpdate: new Date().toISOString()
  });
};

/**
 * الاستماع للحركات القادمة من الخصم
 */
export const listenToOpponent = (gameId, callback) => {
  return onSnapshot(doc(db, "games", gameId), (doc) => {
    if (doc.exists()) {
      callback(doc.data().fen);
    }
  });
};