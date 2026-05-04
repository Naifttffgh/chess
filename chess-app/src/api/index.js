// نقطة الدخول الرئيسية لـ Vercel Serverless Functions
export default async function handler(req, res) {
  const { path } = req.query;

  // توجيه الطلب بناءً على المسار
  if (path === 'engine') {
    return require('./engine-proxy').default(req, res);
  } else if (path === 'storage') {
    return require('./game-storage').default(req, res);
  }

  res.status(404).json({ error: 'المسار غير موجود' });
}