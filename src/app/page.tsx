'use client';

import { useState } from 'react';
import PriceList from '@/components/ui/PriceList';
import { mockCryptoData } from '@/utils/mockData';
import styles from './page.module.css';

export default function Home() {
  const [favorites, setFavorites] = useState<string[]>([]);

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
      </div>
      
      <PriceList
        coins={mockCryptoData}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        title="Live Cryptocurrency Prices"
      />
    </div>
  );
}
