import { useState, useEffect } from 'react';
import { db } from '../services/firebase-config';
import { doc, onSnapshot } from 'firebase/firestore';

export const useUserStats = (userId) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    // جلب البيانات لحظياً من Firestore
    const unsub = onSnapshot(doc(db, "users", userId), (doc) => {
      setStats(doc.data());
      setLoading(false);
    });

    return () => unsub();
  }, [userId]);

  return { stats, loading };
};