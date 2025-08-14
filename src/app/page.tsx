'use client';

import PriceList from '@/components/ui/PriceList';
import { mockCryptoData } from '@/utils/mockData';
import { useFavorites } from '@/contexts/FavoritesContext';
import styles from './page.module.css';

export default function Home() {
  const { favorites, toggleFavorite } = useFavorites();

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
        onToggleFavorite={toggleFavorite}
        title="Live Cryptocurrency Prices"
      />
    </div>
  );
}
