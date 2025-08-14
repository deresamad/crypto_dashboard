import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon}>🔍</div>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.message}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            Go to Home
          </Link>
          <Link href="/compare" className={styles.compareButton}>
            Compare Coins
          </Link>
        </div>
      </div>
    </div>
  );
}