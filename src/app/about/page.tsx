import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>About CryptoDash</h1>
        <p className={styles.subtitle}>
          Your comprehensive cryptocurrency dashboard for tracking market prices and performance
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What is CryptoDash?</h2>
          <p className={styles.text}>
            CryptoDash is a modern, responsive web application built with Next.js and React that provides 
            real-time cryptocurrency market data. Our platform offers an intuitive interface for tracking 
            prices, comparing different cryptocurrencies, and managing your favorite coins all in one place.
          </p>
        </div>

        <div className={styles.features}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Real-time Prices</h3>
              <p>Get up-to-date cryptocurrency prices with 24-hour change indicators and market cap information.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚖️</div>
              <h3>Compare Coins</h3>
              <p>Side-by-side comparison of up to 4 cryptocurrencies to help you make informed decisions.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⭐</div>
              <h3>Favorites Management</h3>
              <p>Save your favorite cryptocurrencies for quick access and personalized tracking.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔍</div>
              <h3>Smart Search</h3>
              <p>Quickly find cryptocurrencies by name or symbol with our intelligent search feature.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Responsive Design</h3>
              <p>Fully responsive interface that works perfectly on desktop, tablet, and mobile devices.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💾</div>
              <h3>Local Storage</h3>
              <p>Your preferences and favorites are saved locally for a personalized experience.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <div className={styles.techStack}>
            <div className={styles.techItem}>
              <strong>Framework:</strong> Next.js 13+ with App Router
            </div>
            <div className={styles.techItem}>
              <strong>Frontend:</strong> React 18 with TypeScript
            </div>
            <div className={styles.techItem}>
              <strong>Styling:</strong> CSS Modules with responsive design
            </div>
            <div className={styles.techItem}>
              <strong>State Management:</strong> React Hooks (useState, useEffect)
            </div>
            <div className={styles.techItem}>
              <strong>Data:</strong> Real-time cryptocurrency data from CoinGecko API
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Getting Started</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h4>Browse Cryptocurrencies</h4>
                <p>Start by exploring the home page to see all available cryptocurrencies with their current prices and market data.</p>
              </div>
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h4>Add to Favorites</h4>
                <p>Click the star icon on any cryptocurrency to add it to your favorites for quick access later.</p>
              </div>
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h4>Compare Coins</h4>
                <p>Use the compare page to analyze up to 4 cryptocurrencies side-by-side and make informed investment decisions.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <h3>⚠️ Important Notice</h3>
          <p>
            This application uses real cryptocurrency data from the CoinGecko API.
            While we strive to provide accurate and up-to-date information, cryptocurrency markets are volatile.
            Please use the data as reference only and consult multiple sources before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
}