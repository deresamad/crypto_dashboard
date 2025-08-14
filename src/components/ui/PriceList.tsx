'use client';

import React, { useMemo, memo } from 'react';
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
}

const PriceList = memo(function PriceList({ 
  coins, 
  favorites = [], 
  onToggleFavorite, 
  showSearch = true,
  title = "Cryptocurrency Prices"
}: PriceListProps) {
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const filteredCoins = useMemo(() => {
    if (!searchTerm) return coins;
    
    const searchLower = searchTerm.toLowerCase();
    return coins.filter(coin => 
      coin.name.toLowerCase().includes(searchLower) ||
      coin.symbol.toLowerCase().includes(searchLower)
    );
  }, [coins, searchTerm]);

  const handleSearch = React.useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      
      {showSearch && (
        <SearchBar 
          onSearch={handleSearch}
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
});

export default PriceList;