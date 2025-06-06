import styles from '../styles/global.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Notifications() {
  const [newsNotifications, setNewsNotifications] = useState(true);
  const [updatesNotifications, setUpdatesNotifications] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم حفظ إعدادات الإشعارات!');
  };

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <h1>إعدادات الإشعارات</h1>
        <form className={styles.notificationForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>
              <input
                type="checkbox"
                checked={newsNotifications}
                onChange={() => setNewsNotifications(!newsNotifications)}
              />
              إشعارات الأخبار الجديدة
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              <input
                type="checkbox"
                checked={updatesNotifications}
                onChange={() => setUpdatesNotifications(!updatesNotifications)}
              />
              إشعارات التحديثات العامة
            </label>
          </div>
          <button type="submit">حفظ الإعدادات</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}