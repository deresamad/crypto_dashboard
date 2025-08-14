'use client';

import React, { useState, memo } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (value: string) => void;
  placeholder?: string;
}

const SearchBar = memo(function SearchBar({ onSearch, placeholder = "Search cryptocurrencies..." }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  }, [onSearch]);

  const clearSearch = React.useCallback(() => {
    setSearchTerm('');
    onSearch('');
  }, [onSearch]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
        {searchTerm && (
          <button 
            onClick={clearSearch}
            className={styles.clearButton}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
});

export default SearchBar;