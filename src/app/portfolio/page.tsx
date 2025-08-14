'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { mockCryptoData, formatPrice, formatPercentage } from '@/utils/mockData';

interface PortfolioItem {
  coinId: string;
  amount: number;
  purchasePrice: number;
}

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [totalValue, setTotalValue] = useState(0);
  const [totalGainLoss, setTotalGainLoss] = useState(0);

  useEffect(() => {
    // Load portfolio from localStorage or initialize with sample data
    const savedPortfolio = localStorage.getItem('cryptoPortfolio');
    if (savedPortfolio) {
      setPortfolio(JSON.parse(savedPortfolio));
    } else {
      // Initialize with sample portfolio data
      const samplePortfolio: PortfolioItem[] = [
        { coinId: 'bitcoin', amount: 0.025, purchasePrice: 42000 },
        { coinId: 'ethereum', amount: 0.5, purchasePrice: 2500 },
        { coinId: 'cardano', amount: 1000, purchasePrice: 0.45 },
      ];
      setPortfolio(samplePortfolio);
      localStorage.setItem('cryptoPortfolio', JSON.stringify(samplePortfolio));
    }
  }, []);

  useEffect(() => {
    // Calculate total value and gain/loss
    let value = 0;
    let gainLoss = 0;
    
    portfolio.forEach(item => {
      const coin = mockCryptoData.find(c => c.id === item.coinId);
      if (coin) {
        const currentValue = coin.current_price * item.amount;
        const purchaseValue = item.purchasePrice * item.amount;
        
        value += currentValue;
        gainLoss += (currentValue - purchaseValue);
      }
    });
    
    setTotalValue(value);
    setTotalGainLoss(gainLoss);
  }, [portfolio]);

  const portfolioItems = portfolio.map(item => {
    const coin = mockCryptoData.find(c => c.id === item.coinId);
    if (!coin) return null;
    
    const currentValue = coin.current_price * item.amount;
    const purchaseValue = item.purchasePrice * item.amount;
    const gainLoss = currentValue - purchaseValue;
    const gainLossPercent = ((gainLoss / purchaseValue) * 100);
    
    return {
      ...item,
      coin,
      currentValue,
      purchaseValue,
      gainLoss,
      gainLossPercent,
    };
  }).filter(Boolean);

  const overallGainLossPercent = totalValue > 0 ? (totalGainLoss / (totalValue - totalGainLoss)) * 100 : 0;

  return (
    <div className="min-h-screen bg-crypto-dark dark:bg-crypto-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-crypto-primary mb-4">My Portfolio</h1>
          <p className="text-crypto-gray text-lg">
            Track your cryptocurrency investments and performance
          </p>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-crypto-darker p-6 rounded-lg border border-crypto-darkest">
            <h3 className="text-crypto-gray text-sm font-medium mb-2">Total Portfolio Value</h3>
            <p className="text-3xl font-bold text-white">{formatPrice(totalValue)}</p>
          </div>
          
          <div className="bg-crypto-darker p-6 rounded-lg border border-crypto-darkest">
            <h3 className="text-crypto-gray text-sm font-medium mb-2">Total Gain/Loss</h3>
            <p className={`text-3xl font-bold ${totalGainLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {totalGainLoss >= 0 ? '+' : ''}{formatPrice(totalGainLoss)}
            </p>
          </div>
          
          <div className="bg-crypto-darker p-6 rounded-lg border border-crypto-darkest">
            <h3 className="text-crypto-gray text-sm font-medium mb-2">Overall Change</h3>
            <p className={`text-3xl font-bold ${overallGainLossPercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {formatPercentage(overallGainLossPercent)}
            </p>
          </div>
        </div>

        {/* Portfolio Holdings */}
        <div className="bg-crypto-darker rounded-lg border border-crypto-darkest overflow-hidden">
          <div className="p-6 border-b border-crypto-darkest">
            <h2 className="text-2xl font-semibold text-crypto-primary">Holdings</h2>
          </div>
          
          {portfolioItems.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-crypto-gray mb-4">No holdings in your portfolio yet.</p>
              <Link 
                href="/" 
                className="bg-crypto-primary text-crypto-dark px-6 py-3 rounded-lg font-semibold hover:bg-crypto-secondary transition-colors"
              >
                Start Building Your Portfolio
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-crypto-dark">
                  <tr>
                    <th className="text-left p-4 text-crypto-gray">Asset</th>
                    <th className="text-left p-4 text-crypto-gray">Holdings</th>
                    <th className="text-left p-4 text-crypto-gray">Avg Buy Price</th>
                    <th className="text-left p-4 text-crypto-gray">Current Price</th>
                    <th className="text-left p-4 text-crypto-gray">Current Value</th>
                    <th className="text-left p-4 text-crypto-gray">Gain/Loss</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolioItems.map((item) => (
                    <tr key={item!.coinId} className="border-t border-crypto-darkest hover:bg-crypto-dark transition-colors">
                      <td className="p-4">
                        <Link 
                          href={`/crypto/${item!.coinId}`}
                          className="flex items-center gap-3 hover:text-crypto-primary transition-colors"
                        >
                          <span className="text-2xl">{item!.coin!.image}</span>
                          <div>
                            <div className="font-semibold">{item!.coin!.name}</div>
                            <div className="text-crypto-gray text-sm">{item!.coin!.symbol.toUpperCase()}</div>
                          </div>
                        </Link>
                      </td>
                      <td className="p-4">
                        <div className="font-semibold">{item!.amount.toLocaleString()}</div>
                        <div className="text-crypto-gray text-sm">{item!.coin!.symbol.toUpperCase()}</div>
                      </td>
                      <td className="p-4 text-crypto-gray">
                        {formatPrice(item!.purchasePrice)}
                      </td>
                      <td className="p-4">
                        {formatPrice(item!.coin!.current_price)}
                      </td>
                      <td className="p-4 font-semibold">
                        {formatPrice(item!.currentValue)}
                      </td>
                      <td className="p-4">
                        <div className={`font-semibold ${item!.gainLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {item!.gainLoss >= 0 ? '+' : ''}{formatPrice(item!.gainLoss)}
                        </div>
                        <div className={`text-sm ${item!.gainLossPercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          ({formatPercentage(item!.gainLossPercent)})
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link 
            href="/" 
            className="bg-crypto-primary text-crypto-dark px-6 py-3 rounded-lg font-semibold hover:bg-crypto-secondary transition-colors"
          >
            Explore Cryptocurrencies
          </Link>
          <Link 
            href="/compare" 
            className="border border-crypto-primary text-crypto-primary px-6 py-3 rounded-lg font-semibold hover:bg-crypto-primary hover:text-crypto-dark transition-colors"
          >
            Compare Assets
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-crypto-darker p-4 rounded-lg border border-crypto-darkest">
          <p className="text-crypto-gray text-sm">
            <strong>Note:</strong> This is a demo portfolio with sample data for educational purposes. 
            In a real application, you would connect to actual trading APIs and use real portfolio data.
          </p>
        </div>
      </div>
    </div>
  );
}