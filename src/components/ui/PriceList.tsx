'use client';

import { useState, useMemo } from 'react';
import CoinCard from './CoinCard';
import SearchBar from './SearchBar';
import { CryptoCoin } from '@/utils/mockData';
import styles from './PriceList.module.css';

interface PriceListProps {
  coins: CryptoCoin[];
  favorites?: string[];
  onToggleFavorite: (coinId: string) => void;
  showSearch?: boolean;
  title?: string;
  loading?: boolean;
}

export default function PriceList({ 
  coins, 
  favorites = [], 
  onToggleFavorite, 
  showSearch = true,
  title = "Cryptocurrency Prices",
  loading = false
}: PriceListProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredCoins = useMemo(() => {
    if (!searchTerm) return coins;
    
    return coins.filter(coin => 
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [coins, searchTerm]);

  if (loading) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Loading cryptocurrency data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      
      {showSearch && (
        <SearchBar 
          onSearch={setSearchTerm}
          placeholder="Search cryptocurrencies..."
        />
      )}
      
      {filteredCoins.length === 0 ? (
        <div className={styles.noResults}>
          <p>No cryptocurrencies found matching your search.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredCoins.map((coin) => (
            <CoinCard
              key={coin.id}
              coin={coin}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favorites.includes(coin.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}