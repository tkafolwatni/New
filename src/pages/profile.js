import styles from '../styles/global.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Profile() {
  const [user] = useState({ id: 1, name: 'مستخدم 1', role: 'عضو' });
  const [activityLog] = useState([
    { id: 1, action: 'إرسال رسالة في الدردشة', timestamp: '2025-06-06 09:01 PM' },
    { id: 2, action: 'إضافة تعليق على خبر', timestamp: '2025-06-05 03:00 PM' },
  ]);
  const [isAdminOrAssistant] = useState(true); // محاكاة المشرف أو المساعد

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <h1>الملف الشخصي: {user.name}</h1>
        <p>الدور: {user.role}</p>
        {isAdminOrAssistant ? (
          <div className={styles.activityLog}>
            <h2>سجل النشاط</h2>
            {activityLog.map(log => (
              <div key={log.id} className={styles.logItem}>
                <span>{log.action}</span>
                <span>{log.timestamp}</span>
              </div>
            ))}
          </div>
        ) : (
          <p>سجل النشاط متاح فقط للمشرفين والمساعدين.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}