import { CryptoCoin } from '@/utils/mockData';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;

// CoinGecko API response interface
interface CoinGeckoMarketData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

// Transform CoinGecko API response to our CryptoCoin interface
const transformCoinGeckoData = (coinData: CoinGeckoMarketData): CryptoCoin => ({
  id: coinData.id,
  name: coinData.name,
  symbol: coinData.symbol,
  current_price: coinData.current_price,
  market_cap: coinData.market_cap,
  price_change_percentage_24h: coinData.price_change_percentage_24h,
  image: coinData.image,
});

export class CoinGeckoApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'CoinGeckoApiError';
  }
}

export const coinGeckoApi = {
  /**
   * Fetch cryptocurrency market data from CoinGecko
   * @param limit Number of coins to fetch (default: 20)
   * @returns Promise<CryptoCoin[]>
   */
  async fetchMarketData(limit: number = 20): Promise<CryptoCoin[]> {
    try {
      const params = new URLSearchParams({
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: limit.toString(),
        page: '1',
        sparkline: 'false',
        price_change_percentage: '24h',
      });

      // Add API key if available
      if (API_KEY) {
        params.append('x_cg_demo_api_key', API_KEY);
      }

      const response = await fetch(
        `${API_BASE_URL}/coins/markets?${params.toString()}`,
        {
          headers: {
            'Accept': 'application/json',
            ...(API_KEY && { 'x-cg-demo-api-key': API_KEY }),
          },
        }
      );

      if (!response.ok) {
        if (response.status === 429) {
          throw new CoinGeckoApiError('API rate limit exceeded. Please try again later.', 429);
        }
        throw new CoinGeckoApiError(`API request failed: ${response.statusText}`, response.status);
      }

      const data: CoinGeckoMarketData[] = await response.json();
      return data.map(transformCoinGeckoData);
    } catch (error) {
      if (error instanceof CoinGeckoApiError) {
        throw error;
      }
      
      // Network or other errors
      console.error('CoinGecko API Error:', error);
      throw new CoinGeckoApiError(
        'Failed to fetch cryptocurrency data. Please check your internet connection.',
        undefined
      );
    }
  },

  /**
   * Fetch data for a specific cryptocurrency
   * @param coinId The CoinGecko coin ID
   * @returns Promise<CryptoCoin>
   */
  async fetchCoinData(coinId: string): Promise<CryptoCoin> {
    try {
      const params = new URLSearchParams({
        vs_currency: 'usd',
        ids: coinId,
        order: 'market_cap_desc',
        sparkline: 'false',
        price_change_percentage: '24h',
      });

      if (API_KEY) {
        params.append('x_cg_demo_api_key', API_KEY);
      }

      const response = await fetch(
        `${API_BASE_URL}/coins/markets?${params.toString()}`,
        {
          headers: {
            'Accept': 'application/json',
            ...(API_KEY && { 'x-cg-demo-api-key': API_KEY }),
          },
        }
      );

      if (!response.ok) {
        if (response.status === 429) {
          throw new CoinGeckoApiError('API rate limit exceeded. Please try again later.', 429);
        }
        throw new CoinGeckoApiError(`API request failed: ${response.statusText}`, response.status);
      }

      const data: CoinGeckoMarketData[] = await response.json();
      
      if (data.length === 0) {
        throw new CoinGeckoApiError(`Coin with ID "${coinId}" not found.`, 404);
      }

      return transformCoinGeckoData(data[0]);
    } catch (error) {
      if (error instanceof CoinGeckoApiError) {
        throw error;
      }
      
      console.error('CoinGecko API Error:', error);
      throw new CoinGeckoApiError(
        'Failed to fetch cryptocurrency data. Please check your internet connection.',
        undefined
      );
    }
  },
};