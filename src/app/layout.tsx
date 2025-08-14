import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { FavoritesProvider } from "@/contexts/FavoritesContext";

export const metadata: Metadata = {
  title: {
    default: "CryptoDash - Cryptocurrency Dashboard",
    template: "%s | CryptoDash"
  },
  description: "Track real-time cryptocurrency prices, compare coins, and manage your favorites with CryptoDash. Built with Next.js for optimal performance.",
  keywords: ["cryptocurrency", "bitcoin", "ethereum", "crypto dashboard", "price tracking", "coin comparison"],
  authors: [{ name: "CryptoDash Team" }],
  creator: "CPAN144 Group Project",
  publisher: "CryptoDash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "CryptoDash - Cryptocurrency Dashboard",
    description: "Track real-time cryptocurrency prices, compare coins, and manage your favorites",
    siteName: "CryptoDash",
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoDash - Cryptocurrency Dashboard",
    description: "Track real-time cryptocurrency prices, compare coins, and manage your favorites",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <FavoritesProvider>
          <Layout>
            {children}
          </Layout>
        </FavoritesProvider>
      </body>
    </html>
  );
}
