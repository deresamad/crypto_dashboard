'use client';

import { useState } from 'react';
import PriceList from '@/components/ui/PriceList';
import { useCryptoData } from '@/hooks/useCryptoData';
import styles from './page.module.css';

export default function Home() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { data: cryptoData, loading, error, refetch } = useCryptoData(20);

  const handleToggleFavorite = (coinId: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(coinId)) {
        return prevFavorites.filter(id => id !== coinId);
      } else {
        return [...prevFavorites, coinId];
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to CryptoDash</h1>
        <p className={styles.subtitle}>
          Track real-time cryptocurrency prices and market data
        </p>
        {error && (
          <div className={styles.errorBanner}>
            <p>⚠️ {error}</p>
            <button onClick={refetch} className={styles.retryButton}>
              Retry
            </button>
          </div>
        )}
      </div>
      
      <PriceList
        coins={cryptoData}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        title={loading ? "Loading Cryptocurrency Prices..." : "Live Cryptocurrency Prices"}
        loading={loading}
      />
    </div>
  );
}
