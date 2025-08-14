'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>₿</span>
          CryptoDash
        </Link>
        
        <ul className={styles.navLinks}>
          <li>
            <Link 
              href="/" 
              className={pathname === '/' ? styles.active : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/compare" 
              className={pathname === '/compare' ? styles.active : ''}
            >
              Compare
            </Link>
          </li>
          <li>
            <Link 
              href="/favorites" 
              className={pathname === '/favorites' ? styles.active : ''}
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={pathname === '/about' ? styles.active : ''}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}