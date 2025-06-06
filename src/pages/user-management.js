import styles from '../styles/global.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: 'مستخدم 1', role: 'عضو' },
    { id: 2, name: 'مستخدم 2', role: 'عضو' },
  ]);
  const [isAdmin, setIsAdmin] = useState(true); // محاكاة المشرف العام

  // تغيير دور المستخدم (متاح للمشرف العام فقط)
  const handleChangeRole = (userId, newRole) => {
    if (isAdmin) {
      setUsers(users.map(user => 
        user.id === userId ? { ...user, role: newRole } : user
      ));
    } else {
      alert('فقط المشرف العام يمكنه تغيير الأدوار!');
    }
  };

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <h1>إدارة المستخدمين</h1>
        {isAdmin ? (
          <div className={styles.userList}>
            {users.map(user => (
              <div key={user.id} className={styles.userItem}>
                <span>{user.name} - الدور الحالي: {user.role}</span>
                <select
                  value={user.role}
                  onChange={(e) => handleChangeRole(user.id, e.target.value)}
                >
                  <option value="عضو">عضو</option>
                  <option value="مشرف">مشرف</option>
                  <option value="مساعد">مساعد</option>
                </select>
              </div>
            ))}
          </div>
        ) : (
          <p>غير مسموح لك بالوصول إلى هذه الصفحة!</p>
        )}
      </main>
      <Footer />
    </div>
  );
}