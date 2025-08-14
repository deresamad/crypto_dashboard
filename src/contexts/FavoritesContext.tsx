'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FavoritesContextType {
  favorites: string[];
  addToFavorites: (coinId: string) => void;
  removeFromFavorites: (coinId: string) => void;
  toggleFavorite: (coinId: string) => void;
  clearAllFavorites: () => void;
  isFavorite: (coinId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Set client flag after hydration to prevent SSR mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load favorites from localStorage on client mount
  useEffect(() => {
    if (isClient) {
      const savedFavorites = localStorage.getItem('cryptoFavorites');
      if (savedFavorites) {
        try {
          setFavorites(JSON.parse(savedFavorites));
        } catch (error) {
          console.error('Error parsing favorites from localStorage:', error);
        }
      }
    }
  }, [isClient]);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    if (isClient && favorites.length >= 0) {
      localStorage.setItem('cryptoFavorites', JSON.stringify(favorites));
    }
  }, [favorites, isClient]);

  const addToFavorites = (coinId: string) => {
    setFavorites(prev => {
      if (!prev.includes(coinId)) {
        return [...prev, coinId];
      }
      return prev;
    });
  };

  const removeFromFavorites = (coinId: string) => {
    setFavorites(prev => prev.filter(id => id !== coinId));
  };

  const toggleFavorite = (coinId: string) => {
    setFavorites(prev => {
      if (prev.includes(coinId)) {
        return prev.filter(id => id !== coinId);
      } else {
        return [...prev, coinId];
      }
    });
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  const isFavorite = (coinId: string) => {
    return favorites.includes(coinId);
  };

  const value: FavoritesContextType = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    clearAllFavorites,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};