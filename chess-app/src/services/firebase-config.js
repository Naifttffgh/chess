import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// يتم جلب هذه الإعدادات من لوحة تحكم Firebase الخاصة بمشروعك
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);

// تصدير الخدمات لاستخدامها في الـ Hooks
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;