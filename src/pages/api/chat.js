export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // جلب قائمة الغرف (محاكاة)
      const rooms = ['Room_1', 'Room_2'];
      res.status(200).json(rooms);
      break;

    case 'POST':
      // إضافة رسالة جديدة أو استطلاع أو تذكير (محاكاة)
      const { action, data } = req.body;
      if (action === 'sendMessage') {
        res.status(200).json({ message: 'تم إرسال الرسالة بنجاح', data });
      } else if (action === 'createPoll') {
        res.status(200).json({ message: 'تم إنشاء الاستطلاع بنجاح', data });
      } else if (action === 'setReminder') {
        res.status(200).json({ message: 'تم تعيين التذكير بنجاح', data });
      } else {
        res.status(400).json({ error: 'الإجراء غير مدعوم' });
      }
      break;

    default:
      res.status(405).json({ error: 'الطريقة غير مسموح بها' });
  }
}