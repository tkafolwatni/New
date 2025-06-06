export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      // تحديث إعدادات الإشعارات (محاكاة)
      const { newsNotifications, updatesNotifications } = req.body;
      res.status(200).json({
        message: 'تم تحديث إعدادات الإشعارات بنجاح',
        news: newsNotifications,
        updates: updatesNotifications,
      });
      break;

    default:
      res.status(405).json({ error: 'الطريقة غير مسموح بها' });
  }
}