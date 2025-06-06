import styles from '../styles/chessboard.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import { useEffect, useState } from 'react';

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // جلب الأخبار تلقائيًا عبر API
    fetch('/api/news-feed')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error('Error fetching news:', err));
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.chessboard}>
        <h1>رقعة الشطرنج</h1>
        <div className={styles.board}>
          {/* تصميم رقعة الشطرنج 8x8 */}
          {[...Array(64)].map((_, index) => (
            <div
              key={index}
              className={(Math.floor(index / 8) + index) % 2 === 0 ? styles.white : styles.black}
            />
          ))}
        </div>
        <section className={styles.newsSection}>
          <h2>آخر الأخبار السياسية</h2>
          <div className={styles.newsGrid}>
            {news.length > 0 ? (
              news.map((article, idx) => (
                <NewsCard key={idx} title={article.title} summary={article.summary} />
              ))
            ) : (
              <p>جارٍ تحميل الأخبار...</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}