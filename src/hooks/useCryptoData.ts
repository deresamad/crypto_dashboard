import { useState, useEffect, useCallback } from 'react';
import { CryptoCoin, mockCryptoData } from '@/utils/mockData';
import { coinGeckoApi, CoinGeckoApiError } from '@/services/coinGeckoApi';

interface UseCryptoDataState {
  data: CryptoCoin[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching cryptocurrency data with loading and error states
 * @param limit Number of coins to fetch (default: 20)
 * @param enableApi Whether to use the real API or fallback to mock data (default: true)
 */
export const useCryptoData = (limit: number = 20, enableApi: boolean = true): UseCryptoDataState => {
  const [data, setData] = useState<CryptoCoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (!enableApi) {
      // Use mock data when API is disabled
      setData(mockCryptoData.slice(0, limit));
      setLoading(false);
      setError(null);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const cryptoData = await coinGeckoApi.fetchMarketData(limit);
      setData(cryptoData);
    } catch (err) {
      console.error('Failed to fetch crypto data:', err);
      
      let errorMessage = 'Failed to fetch cryptocurrency data.';
      
      if (err instanceof CoinGeckoApiError) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      // Fallback to mock data when API fails
      setData(mockCryptoData.slice(0, limit));
    } finally {
      setLoading(false);
    }
  }, [limit, enableApi]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};

interface UseSingleCoinDataState {
  data: CryptoCoin | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching single cryptocurrency data
 * @param coinId The CoinGecko coin ID
 * @param enableApi Whether to use the real API or fallback to mock data (default: true)
 */
export const useSingleCoinData = (coinId: string, enableApi: boolean = true): UseSingleCoinDataState => {
  const [data, setData] = useState<CryptoCoin | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (!coinId) {
      setLoading(false);
      return;
    }

    if (!enableApi) {
      // Use mock data when API is disabled
      const mockCoin = mockCryptoData.find(coin => coin.id === coinId);
      setData(mockCoin || null);
      setLoading(false);
      setError(mockCoin ? null : 'Coin not found in mock data');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const coinData = await coinGeckoApi.fetchCoinData(coinId);
      setData(coinData);
    } catch (err) {
      console.error('Failed to fetch coin data:', err);
      
      let errorMessage = 'Failed to fetch cryptocurrency data.';
      
      if (err instanceof CoinGeckoApiError) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      // Fallback to mock data when API fails
      const mockCoin = mockCryptoData.find(coin => coin.id === coinId);
      setData(mockCoin || null);
    } finally {
      setLoading(false);
    }
  }, [coinId, enableApi]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};