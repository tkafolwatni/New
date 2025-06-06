import styles from '../styles/global.module.css';

export default function NewsCard({ title, summary }) {
  return (
    <div className={styles.newsCard}>
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  );
}