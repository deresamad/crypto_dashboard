'use client';

import Link from 'next/link';
import { formatPrice, formatMarketCap, formatPercentage, CryptoCoin } from '@/utils/mockData';
import styles from './CoinCard.module.css';

interface CoinCardProps {
  coin: CryptoCoin;
  onToggleFavorite: (coinId: string) => void;
  isFavorite?: boolean;
}

export default function CoinCard({ coin, onToggleFavorite, isFavorite = false }: CoinCardProps) {
  const isPositive = coin.price_change_percentage_24h >= 0;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(coin.id);
  };

  return (
    <Link 
      href={`/crypto/${coin.id}`}
      className={`${styles.card} block hover:transform hover:scale-105 transition-all duration-200 cursor-pointer`}
    >
      <div className={styles.header}>
        <div className={styles.coinInfo}>
          <span className={styles.coinIcon}>{coin.image}</span>
          <div>
            <h3 className={styles.coinName}>{coin.name}</h3>
            <span className={styles.coinSymbol}>{coin.symbol.toUpperCase()}</span>
          </div>
        </div>
        
        <button
          onClick={handleFavoriteClick}
          className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''} hover:scale-110 transition-transform`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '⭐' : '☆'}
        </button>
      </div>
      
      <div className={styles.priceSection}>
        <div className={styles.currentPrice}>
          {formatPrice(coin.current_price)}
        </div>
        
        <div className={`${styles.priceChange} ${isPositive ? styles.positive : styles.negative}`}>
          {formatPercentage(coin.price_change_percentage_24h)}
        </div>
      </div>
      
      <div className={styles.marketCap}>
        <span className={styles.label}>Market Cap:</span>
        <span className={styles.value}>{formatMarketCap(coin.market_cap)}</span>
      </div>
    </Link>
  );
}