import styles from '../styles/global.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // محاكاة تسجيل الدخول أو التسجيل
    alert(`${isLogin ? 'تسجيل دخول' : 'تسجيل حساب جديد'} لـ ${username}`);
  };

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <h1>{isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}</h1>
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">اسم المستخدم</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">كلمة المرور</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{isLogin ? 'دخول' : 'إنشاء حساب'}</button>
        </form>
        <p>
          {isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'إنشاء حساب' : 'تسجيل الدخول'}
          </button>
        </p>
      </main>
      <Footer />
    </div>
  );
}