import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}