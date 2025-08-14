'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={`${styles.navbar} bg-crypto-darker dark:bg-crypto-darker border-b border-crypto-darkest`}>
      <div className={`${styles.container} flex items-center justify-between max-w-7xl mx-auto px-4`}>
        <Link href="/" className={`${styles.logo} flex items-center gap-2 text-xl font-bold text-crypto-primary hover:text-crypto-secondary transition-colors`}>
          <span className={styles.logoIcon}>₿</span>
          CryptoDash
        </Link>
        
        <div className="flex items-center gap-6">
          <ul className={`${styles.navLinks} flex items-center gap-6`}>
            <li>
              <Link 
                href="/" 
                className={`px-3 py-2 rounded-md transition-colors ${
                  pathname === '/' 
                    ? 'text-crypto-primary bg-crypto-darkest' 
                    : 'text-crypto-gray hover:text-crypto-primary'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/compare" 
                className={`px-3 py-2 rounded-md transition-colors ${
                  pathname === '/compare' 
                    ? 'text-crypto-primary bg-crypto-darkest' 
                    : 'text-crypto-gray hover:text-crypto-primary'
                }`}
              >
                Compare
              </Link>
            </li>
            <li>
              <Link 
                href="/favorites" 
                className={`px-3 py-2 rounded-md transition-colors ${
                  pathname === '/favorites' 
                    ? 'text-crypto-primary bg-crypto-darkest' 
                    : 'text-crypto-gray hover:text-crypto-primary'
                }`}
              >
                Favorites
              </Link>
            </li>
            <li>
              <Link 
                href="/portfolio" 
                className={`px-3 py-2 rounded-md transition-colors ${
                  pathname === '/portfolio' 
                    ? 'text-crypto-primary bg-crypto-darkest' 
                    : 'text-crypto-gray hover:text-crypto-primary'
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`px-3 py-2 rounded-md transition-colors ${
                  pathname === '/about' 
                    ? 'text-crypto-primary bg-crypto-darkest' 
                    : 'text-crypto-gray hover:text-crypto-primary'
                }`}
              >
                About
              </Link>
            </li>
          </ul>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}