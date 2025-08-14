'use client';

import { useState } from 'react';
import { CryptoCoin, formatPrice, formatPercentage, formatMarketCap } from '@/utils/mockData';
import { useCryptoData } from '@/hooks/useCryptoData';
import SearchBar from '@/components/ui/SearchBar';
import styles from './page.module.css';

export default function Compare() {
  const [selectedCoins, setSelectedCoins] = useState<CryptoCoin[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data: cryptoData, loading, error, refetch } = useCryptoData(100); // Fetch more coins for comparison

  const filteredCoins = cryptoData.filter(coin => 
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(coin => !selectedCoins.some(selected => selected.id === coin.id));

  const addCoinToCompare = (coin: CryptoCoin) => {
    if (selectedCoins.length < 4) { // Limit to 4 coins for comparison
      setSelectedCoins([...selectedCoins, coin]);
    }
  };

  const removeCoinFromCompare = (coinId: string) => {
    setSelectedCoins(selectedCoins.filter(coin => coin.id !== coinId));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Compare Cryptocurrencies</h1>
        <p className={styles.subtitle}>
          Select up to 4 cryptocurrencies to compare their prices, market caps, and performance.
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

      <div className={styles.searchSection}>
        <SearchBar 
          onSearch={setSearchTerm}
          placeholder="Search for cryptocurrencies to compare..."
        />
      </div>

      {selectedCoins.length === 0 && (
        <div className={styles.emptyState}>
          <p>Select cryptocurrencies from the list below to start comparing.</p>
        </div>
      )}

      {selectedCoins.length > 0 && (
        <div className={styles.comparisonSection}>
          <h2 className={styles.sectionTitle}>Comparison ({selectedCoins.length}/4)</h2>
          <div className={styles.comparisonTable}>
            <div className={styles.tableHeader}>
              <div className={styles.cell}>Coin</div>
              <div className={styles.cell}>Price</div>
              <div className={styles.cell}>24h Change</div>
              <div className={styles.cell}>Market Cap</div>
              <div className={styles.cell}>Action</div>
            </div>
            
            {selectedCoins.map((coin) => (
              <div key={coin.id} className={styles.tableRow}>
                <div className={styles.cell}>
                  <div className={styles.coinInfo}>
                    <img 
                      src={coin.image} 
                      alt={coin.name}
                      className={styles.coinImage}
                      onError={(e) => {
                        // Fallback to emoji if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement!;
                        if (!parent.querySelector('.fallbackEmoji')) {
                          const emoji = document.createElement('span');
                          emoji.className = 'fallbackEmoji';
                          emoji.textContent = '🪙';
                          emoji.style.fontSize = '2rem';
                          parent.appendChild(emoji);
                        }
                      }}
                    />
                    <div>
                      <div className={styles.coinName}>{coin.name}</div>
                      <div className={styles.coinSymbol}>{coin.symbol.toUpperCase()}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.cell}>
                  <span className={styles.price}>{formatPrice(coin.current_price)}</span>
                </div>
                <div className={styles.cell}>
                  <span className={`${styles.change} ${coin.price_change_percentage_24h >= 0 ? styles.positive : styles.negative}`}>
                    {formatPercentage(coin.price_change_percentage_24h)}
                  </span>
                </div>
                <div className={styles.cell}>
                  <span className={styles.marketCap}>{formatMarketCap(coin.market_cap)}</span>
                </div>
                <div className={styles.cell}>
                  <button
                    onClick={() => removeCoinFromCompare(coin.id)}
                    className={styles.removeButton}
                    aria-label={`Remove ${coin.name} from comparison`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.availableCoins}>
        <h2 className={styles.sectionTitle}>
          {loading ? 'Loading Available Cryptocurrencies...' : 'Available Cryptocurrencies'}
          {selectedCoins.length >= 4 && (
            <span className={styles.maxReached}>(Maximum reached - remove coins to add more)</span>
          )}
        </h2>
        
        {loading ? (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p>Loading cryptocurrency data...</p>
          </div>
        ) : (
          <div className={styles.coinsGrid}>
            {filteredCoins.map((coin) => (
              <div key={coin.id} className={styles.coinCard}>
                <div className={styles.coinCardHeader}>
                  <img 
                    src={coin.image} 
                    alt={coin.name}
                    className={styles.coinImage}
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement!;
                      if (!parent.querySelector('.fallbackEmoji')) {
                        const emoji = document.createElement('span');
                        emoji.className = 'fallbackEmoji';
                        emoji.textContent = '🪙';
                        emoji.style.fontSize = '2rem';
                        parent.appendChild(emoji);
                      }
                    }}
                  />
                  <div>
                    <h3 className={styles.coinName}>{coin.name}</h3>
                    <span className={styles.coinSymbol}>{coin.symbol.toUpperCase()}</span>
                  </div>
                </div>
                
                <div className={styles.coinCardPrice}>
                  {formatPrice(coin.current_price)}
                </div>
                
                <button
                  onClick={() => addCoinToCompare(coin)}
                  disabled={selectedCoins.length >= 4}
                  className={styles.addButton}
                  aria-label={`Add ${coin.name} to comparison`}
                >
                  {selectedCoins.length >= 4 ? 'Max Reached' : 'Add to Compare'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}