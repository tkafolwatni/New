// مكتبة بسيطة لمحاكاة قاعدة البيانات
const db = {
  users: [
    { id: 1, name: 'مستخدم 1', role: 'عضو', email: 'user1@example.com' },
    { id: 2, name: 'مستخدم 2', role: 'مشرف', email: 'user2@example.com' },
  ],
  rooms: ['Room_1', 'Room_2'],
  messages: [],
  notifications: { news: true, updates: false },
};

export const getUsers = () => [...db.users];
export const updateUserRole = (userId, newRole) => {
  db.users = db.users.map(user =>
    user.id === userId ? { ...user, role: newRole } : user
  );
  return { success: true };
};
export const addMessage = (message) => {
  db.messages.push({ ...message, timestamp: new Date().toLocaleTimeString() });
  return { success: true };
};
export const updateNotifications = (settings) => {
  db.notifications = { ...db.notifications, ...settings };
  return { success: true };
};