export interface CryptoCoin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  image: string;
}

export const mockCryptoData: CryptoCoin[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    current_price: 45230.50,
    market_cap: 887654321098,
    price_change_percentage_24h: 2.34,
    image: '🟡', // Using emoji as placeholder since we can't access external images
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    current_price: 2890.75,
    market_cap: 347234567890,
    price_change_percentage_24h: -1.23,
    image: '🔵',
  },
  {
    id: 'binancecoin',
    name: 'BNB',
    symbol: 'BNB',
    current_price: 315.42,
    market_cap: 48765432109,
    price_change_percentage_24h: 0.87,
    image: '🟨',
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    current_price: 0.52,
    market_cap: 18123456789,
    price_change_percentage_24h: 4.56,
    image: '🔷',
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    current_price: 98.76,
    market_cap: 43987654321,
    price_change_percentage_24h: -2.91,
    image: '🟣',
  },
  {
    id: 'xrp',
    name: 'XRP',
    symbol: 'XRP',
    current_price: 0.63,
    market_cap: 34567891234,
    price_change_percentage_24h: 1.78,
    image: '⚪',
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    symbol: 'DOT',
    current_price: 7.23,
    market_cap: 9876543210,
    price_change_percentage_24h: -0.45,
    image: '⚫',
  },
  {
    id: 'dogecoin',
    name: 'Dogecoin',
    symbol: 'DOGE',
    current_price: 0.082,
    market_cap: 12345678901,
    price_change_percentage_24h: 3.21,
    image: '🟠',
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const formatMarketCap = (marketCap: number): string => {
  if (marketCap >= 1e12) {
    return `$${(marketCap / 1e12).toFixed(2)}T`;
  } else if (marketCap >= 1e9) {
    return `$${(marketCap / 1e9).toFixed(2)}B`;
  } else if (marketCap >= 1e6) {
    return `$${(marketCap / 1e6).toFixed(2)}M`;
  }
  return `$${marketCap}`;
};

export const formatPercentage = (percentage: number): string => {
  return `${percentage >= 0 ? '+' : ''}${percentage.toFixed(2)}%`;
};