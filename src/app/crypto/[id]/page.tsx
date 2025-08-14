'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { mockCryptoData, CryptoCoin, formatPrice, formatMarketCap, formatPercentage } from '@/utils/mockData';
import { useParams } from 'next/navigation';
import PriceChart from '@/components/ui/PriceChart';

export default function CryptoDetailPage() {
  const params = useParams();
  const coinId = params?.id as string;
  const [coin, setCoin] = useState<CryptoCoin | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (coinId) {
      // Find the coin in mock data
      const foundCoin = mockCryptoData.find(c => c.id === coinId);
      setCoin(foundCoin || null);
      setLoading(false);

      // Check if it's in favorites
      const savedFavorites = localStorage.getItem('cryptoFavorites');
      if (savedFavorites) {
        const favorites = JSON.parse(savedFavorites);
        setIsFavorite(favorites.includes(coinId));
      }
    }
  }, [coinId]);

  const handleToggleFavorite = () => {
    const savedFavorites = localStorage.getItem('cryptoFavorites');
    let favorites: string[] = savedFavorites ? JSON.parse(savedFavorites) : [];
    
    if (isFavorite) {
      favorites = favorites.filter(id => id !== coinId);
    } else {
      favorites.push(coinId);
    }
    
    localStorage.setItem('cryptoFavorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-crypto-dark dark:bg-crypto-dark flex items-center justify-center">
        <div className="text-crypto-primary text-xl">Loading...</div>
      </div>
    );
  }

  if (!coin) {
    return (
      <div className="min-h-screen bg-crypto-dark dark:bg-crypto-dark flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-crypto-primary mb-4">Cryptocurrency Not Found</h1>
          <p className="text-crypto-gray mb-6">The cryptocurrency you&apos;re looking for doesn&apos;t exist in our database.</p>
          <Link 
            href="/" 
            className="bg-crypto-primary text-crypto-dark px-6 py-3 rounded-lg font-semibold hover:bg-crypto-secondary transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <div className="min-h-screen bg-crypto-dark dark:bg-crypto-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/" 
            className="text-crypto-primary hover:text-crypto-secondary transition-colors flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Main Content */}
        <div className="bg-crypto-darker rounded-xl p-8 border border-crypto-darkest">
          {/* Coin Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="text-6xl">{coin.image}</div>
              <div>
                <h1 className="text-4xl font-bold text-crypto-primary">{coin.name}</h1>
                <p className="text-2xl text-crypto-gray">{coin.symbol.toUpperCase()}</p>
              </div>
            </div>
            
            <button
              onClick={handleToggleFavorite}
              className={`text-3xl p-3 rounded-lg border-2 transition-all ${
                isFavorite 
                  ? 'border-crypto-primary text-crypto-primary hover:bg-crypto-primary hover:text-crypto-dark' 
                  : 'border-crypto-darkest text-crypto-gray hover:border-crypto-primary hover:text-crypto-primary'
              }`}
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite ? '⭐' : '☆'}
            </button>
          </div>

          {/* Price Section and Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-crypto-dark p-6 rounded-lg border border-crypto-darkest">
              <h3 className="text-crypto-gray text-sm font-medium mb-2">Current Price</h3>
              <p className="text-3xl font-bold text-white">{formatPrice(coin.current_price)}</p>
            </div>
            
            <div className="bg-crypto-dark p-6 rounded-lg border border-crypto-darkest">
              <h3 className="text-crypto-gray text-sm font-medium mb-2">24h Change</h3>
              <p className={`text-3xl font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {formatPercentage(coin.price_change_percentage_24h)}
              </p>
            </div>
            
            <div className="bg-crypto-dark p-6 rounded-lg border border-crypto-darkest">
              <h3 className="text-crypto-gray text-sm font-medium mb-2">Market Cap</h3>
              <p className="text-3xl font-bold text-white">{formatMarketCap(coin.market_cap)}</p>
            </div>
          </div>

          {/* Price Chart */}
          <div className="mb-8">
            <PriceChart 
              coinName={coin.name}
              currentPrice={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
            />
          </div>

          {/* Additional Info */}
          <div className="bg-crypto-dark p-6 rounded-lg border border-crypto-darkest">
            <h3 className="text-xl font-semibold text-crypto-primary mb-4">About {coin.name}</h3>
            <p className="text-crypto-gray leading-relaxed">
              {coin.name} ({coin.symbol.toUpperCase()}) is a digital cryptocurrency that has gained significant attention in the crypto market. 
              With a current market capitalization of {formatMarketCap(coin.market_cap)}, it represents a substantial portion of the overall cryptocurrency ecosystem.
              The current price of {formatPrice(coin.current_price)} reflects recent market activity and investor sentiment.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="/compare" 
              className="bg-crypto-primary text-crypto-dark px-6 py-3 rounded-lg font-semibold hover:bg-crypto-secondary transition-colors"
            >
              Compare with Others
            </Link>
            <Link 
              href="/favorites" 
              className="border border-crypto-primary text-crypto-primary px-6 py-3 rounded-lg font-semibold hover:bg-crypto-primary hover:text-crypto-dark transition-colors"
            >
              View Favorites
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}