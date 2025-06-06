import styles from '../styles/global.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>جميع الحقوق محفوظة &copy; 2025</p>
      <p>
        <a href="/privacy-policy">سياسات الخصوصية</a>
      </p>
    </footer>
  );
}