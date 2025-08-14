'use client';

import React, { useMemo } from 'react';
import { mockCryptoData, formatPrice, formatMarketCap } from '@/utils/mockData';
import { useFavorites } from '@/contexts/FavoritesContext';
import styles from './PortfolioSummary.module.css';

export default function PortfolioSummary() {
  const { favorites } = useFavorites();

  const portfolioData = useMemo(() => {
    if (favorites.length === 0) return null;

    const favoriteCoin = mockCryptoData.filter(coin => favorites.includes(coin.id));
    const totalValue = favoriteCoin.reduce((acc, coin) => acc + coin.current_price, 0);
    const totalMarketCap = favoriteCoin.reduce((acc, coin) => acc + coin.market_cap, 0);
    const averageChange = favoriteCoin.reduce((acc, coin) => acc + coin.price_change_percentage_24h, 0) / favoriteCoin.length;

    // Find best and worst performers
    const sortedByPerformance = [...favoriteCoin].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    const bestPerformer = sortedByPerformance[0];
    const worstPerformer = sortedByPerformance[sortedByPerformance.length - 1];

    return {
      coins: favoriteCoin,
      totalCoins: favoriteCoin.length,
      totalValue,
      totalMarketCap,
      averageChange,
      bestPerformer,
      worstPerformer,
    };
  }, [favorites]);

  if (!portfolioData) {
    return (
      <div className={styles.emptyState}>
        <h3>📊 Portfolio Summary</h3>
        <p>Add some cryptocurrencies to your favorites to see your portfolio summary.</p>
      </div>
    );
  }

  const { totalCoins, totalValue, totalMarketCap, averageChange, bestPerformer, worstPerformer } = portfolioData;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>📊 Portfolio Summary</h3>
      
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{totalCoins}</div>
          <div className={styles.statLabel}>Tracked Coins</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statValue}>{formatPrice(totalValue)}</div>
          <div className={styles.statLabel}>Combined Value</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statValue}>{formatMarketCap(totalMarketCap)}</div>
          <div className={styles.statLabel}>Total Market Cap</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={`${styles.statValue} ${averageChange >= 0 ? styles.positive : styles.negative}`}>
            {averageChange >= 0 ? '+' : ''}{averageChange.toFixed(2)}%
          </div>
          <div className={styles.statLabel}>Avg. 24h Change</div>
        </div>
      </div>

      <div className={styles.performanceGrid}>
        <div className={styles.performanceCard}>
          <div className={styles.performanceHeader}>
            <span className={styles.performanceIcon}>🚀</span>
            <span className={styles.performanceTitle}>Best Performer</span>
          </div>
          <div className={styles.performanceContent}>
            <div className={styles.coinName}>{bestPerformer.name}</div>
            <div className={`${styles.change} ${styles.positive}`}>
              +{bestPerformer.price_change_percentage_24h.toFixed(2)}%
            </div>
          </div>
        </div>

        <div className={styles.performanceCard}>
          <div className={styles.performanceHeader}>
            <span className={styles.performanceIcon}>📉</span>
            <span className={styles.performanceTitle}>Worst Performer</span>
          </div>
          <div className={styles.performanceContent}>
            <div className={styles.coinName}>{worstPerformer.name}</div>
            <div className={`${styles.change} ${styles.negative}`}>
              {worstPerformer.price_change_percentage_24h.toFixed(2)}%
            </div>
          </div>
        </div>
      </div>

      <div className={styles.distributionChart}>
        <h4>Portfolio Distribution</h4>
        <div className={styles.chartContainer}>
          {portfolioData.coins.map((coin, index) => {
            const percentage = (coin.current_price / totalValue) * 100;
            const hue = (index * 45) % 360;
            return (
              <div 
                key={coin.id} 
                className={styles.distributionBar}
                style={{ 
                  width: `${percentage}%`,
                  backgroundColor: `hsl(${hue}, 70%, 50%)`,
                  opacity: 0.8
                }}
                title={`${coin.name}: ${percentage.toFixed(1)}%`}
              />
            );
          })}
        </div>
        <div className={styles.legend}>
          {portfolioData.coins.map((coin, index) => {
            const percentage = (coin.current_price / totalValue) * 100;
            const hue = (index * 45) % 360;
            return (
              <div key={coin.id} className={styles.legendItem}>
                <div 
                  className={styles.legendColor}
                  style={{ backgroundColor: `hsl(${hue}, 70%, 50%)` }}
                />
                <span>{coin.symbol.toUpperCase()}: {percentage.toFixed(1)}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}