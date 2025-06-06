export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      // محاكاة التكامل مع أنظمة خارجية (مثل البريد الإلكتروني أو وسائل التواصل)
      const { service, data } = req.body;
      if (service === 'email') {
        res.status(200).json({ message: `تم إرسال البريد الإلكتروني بنجاح: ${data}` });
      } else if (service === 'social') {
        res.status(200).json({ message: `تم مشاركة المحتوى على وسائل التواصل: ${data}` });
      } else {
        res.status(400).json({ error: 'خدمة غير مدعومة' });
      }
      break;

    default:
      res.status(405).json({ error: 'الطريقة غير مسموح بها' });
  }
}