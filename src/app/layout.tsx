import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { FavoritesProvider } from "@/contexts/FavoritesContext";

export const metadata: Metadata = {
  title: "Crypto Dashboard",
  description: "Real-time cryptocurrency prices and market data dashboard",
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
