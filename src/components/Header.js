import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/global.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.png" alt="الشعار" width={100} height={50} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">الرئيسية</Link>
        <Link href="/chat">الدردشة</Link>
        <Link href="/news">الأخبار</Link>
        <Link href="/subscriptions">الاشتراكات</Link>
        <Link href="/profile">الملف الشخصي</Link>
        <Link href="/notifications">الإشعارات</Link>
        <Link href="/privacy-policy">سياسات الخصوصية</Link>
      </nav>
    </header>
  );
}