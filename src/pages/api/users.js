export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // جلب قائمة المستخدمين (محاكاة)
      const users = [
        { id: 1, name: 'مستخدم 1', role: 'عضو' },
        { id: 2, name: 'مستخدم 2', role: 'مشرف' },
      ];
      res.status(200).json(users);
      break;

    case 'PUT':
      // تغيير دور المستخدم (متاح للمشرف العام فقط)
      const { userId, newRole } = req.body;
      if (newRole && ['عضو', 'مشرف', 'مساعد'].includes(newRole)) {
        res.status(200).json({ message: `تم تغيير الدور للمستخدم ${userId} إلى ${newRole}` });
      } else {
        res.status(400).json({ error: 'دور غير صالح' });
      }
      break;

    default:
      res.status(405).json({ error: 'الطريقة غير مسموح بها' });
  }
}