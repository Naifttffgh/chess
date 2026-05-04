import { db } from '../services/firebase-config'; // استيراد إعدادات Firebase
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export default async function handler(req, res) {
  const { action, gameData, userId } = req.body;

  try {
    if (action === 'save') {
      // حفظ بيانات المباراة والتحليلات والنقلات العبقرية في Firestore
      const docRef = await addDoc(collection(db, "games"), {
        ...gameData,
        userId,
        createdAt: new Date().toISOString()
      });
      return res.status(200).json({ id: docRef.id, message: "تم حفظ المباراة بنجاح" });
    } 

    if (action === 'fetch') {
      // جلب تاريخ مباريات المستخدم بناءً على معرفه
      const q = query(collection(db, "games"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      const games = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return res.status(200).json(games);
    }
  } catch (error) {
    return res.status(500).json({ error: 'فشل في التعامل مع قاعدة البيانات' });
  }
}