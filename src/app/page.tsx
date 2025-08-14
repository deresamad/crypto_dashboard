'use client';

import { Suspense, lazy } from 'react';
import { useFavorites } from '@/contexts/FavoritesContext';
import { mockCryptoData } from '@/utils/mockData';
import Loading from '@/components/ui/Loading';
import styles from './page.module.css';

// Lazy load the PriceList component for better performance
const LazyPriceList = lazy(() => import('@/components/ui/PriceList'));

export default function Home() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to CryptoDash</h1>
        <p className={styles.subtitle}>
          Track real-time cryptocurrency prices and market data
        </p>
        {favorites.length > 0 && (
          <div className={styles.favoritesSummary}>
            <span>📋 {favorites.length} favorite{favorites.length !== 1 ? 's' : ''} saved</span>
          </div>
        )}
      </div>
      
      <Suspense fallback={<Loading text="Loading cryptocurrency data..." />}>
        <LazyPriceList
          coins={mockCryptoData}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          title="Live Cryptocurrency Prices"
        />
      </Suspense>
    </div>
  );
}
