import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h4>CryptoDash</h4>
            <p>Your trusted cryptocurrency dashboard for real-time market data and insights.</p>
          </div>
          
          <div className={styles.section}>
            <h4>Features</h4>
            <ul>
              <li>Real-time Prices</li>
              <li>Portfolio Tracking</li>
              <li>Market Comparison</li>
              <li>Price Alerts</li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h4>Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/compare">Compare Coins</a></li>
              <li><a href="/favorites">My Favorites</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2024 CryptoDash. Built with Next.js for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}