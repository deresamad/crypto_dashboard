'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { mockCryptoData } from '@/utils/mockData';
import PriceList from '@/components/ui/PriceList';
import styles from './page.module.css';

export default function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('cryptoFavorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        // Reset favorites on localStorage parsing error
        setFavorites([]);
      }
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('cryptoFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (coinId: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(coinId)) {
        return prevFavorites.filter(id => id !== coinId);
      } else {
        return [...prevFavorites, coinId];
      }
    });
  };

  const favoriteCoins = mockCryptoData.filter(coin => favorites.includes(coin.id));

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Favorite Cryptocurrencies</h1>
        <p className={styles.subtitle}>
          Keep track of your favorite cryptocurrencies in one place. 
          Your favorites are saved locally in your browser.
        </p>
        
        {favorites.length > 0 && (
          <div className={styles.actions}>
            <span className={styles.count}>
              {favorites.length} coin{favorites.length !== 1 ? 's' : ''} in favorites
            </span>
            <button 
              onClick={clearAllFavorites}
              className={styles.clearButton}
            >
              Clear All Favorites
            </button>
          </div>
        )}
      </div>

      {favorites.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>⭐</div>
          <h2>No Favorites Yet</h2>
          <p>
            Start adding cryptocurrencies to your favorites by clicking the star icon 
            on any coin from the home page or compare page.
          </p>
          <Link href="/" className={styles.homeLink}>
            Browse Cryptocurrencies
          </Link>
        </div>
      ) : (
        <PriceList
          coins={favoriteCoins}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          showSearch={true}
          title="Your Favorite Cryptocurrencies"
        />
      )}
      
      <div className={styles.info}>
        <div className={styles.infoCard}>
          <h3>💾 Local Storage</h3>
          <p>Your favorites are saved in your browser&apos;s local storage and will persist between sessions.</p>
        </div>
        
        <div className={styles.infoCard}>
          <h3>🔄 Real-time Updates</h3>
          <p>Favorite coin prices and data are updated in real-time with the latest market information.</p>
        </div>
        
        <div className={styles.infoCard}>
          <h3>📊 Quick Access</h3>
          <p>Easily access and monitor your most important cryptocurrencies from this dedicated page.</p>
        </div>
      </div>
    </div>
  );
}