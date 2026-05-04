import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main'; // استدعاء مدير العمليات الرئيسي
import './styles/tailwind.css'; // تحميل التنسيقات الأساسية
import { FirebaseProvider } from './services/firebase-config'; // تهيئة الاتصال السحابي

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>
);