'use client';

interface PriceChartProps {
  coinName: string;
  currentPrice: number;
  priceChange: number;
}

export default function PriceChart({ coinName, currentPrice, priceChange }: PriceChartProps) {
  // Generate mock chart data for demonstration
  const generateMockData = () => {
    const dataPoints = [];
    const basePrice = currentPrice - (currentPrice * priceChange / 100);
    
    for (let i = 0; i < 24; i++) {
      const variation = (Math.random() - 0.5) * 0.1; // 10% variation
      const price = basePrice + (basePrice * variation);
      dataPoints.push(price + (currentPrice - basePrice) * (i / 23)); // Trend towards current price
    }
    
    return dataPoints;
  };

  const data = generateMockData();
  const minPrice = Math.min(...data);
  const maxPrice = Math.max(...data);
  const priceRange = maxPrice - minPrice;
  const isPositive = priceChange >= 0;

  // Generate SVG path for the chart
  const generatePath = () => {
    const width = 300;
    const height = 100;
    
    const points = data.map((price, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((price - minPrice) / priceRange) * height;
      return `${x},${y}`;
    });
    
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="bg-crypto-dark p-4 rounded-lg border border-crypto-darkest">
      <div className="mb-3">
        <h4 className="text-crypto-gray text-sm font-medium">24h Price Chart</h4>
        <p className="text-white font-semibold">{coinName}</p>
      </div>
      
      <div className="relative">
        <svg width="300" height="100" className="w-full h-auto">
          {/* Chart background grid */}
          <defs>
            <pattern id="grid" width="30" height="20" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 20" fill="none" stroke="#16213e" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Price line */}
          <path
            d={generatePath()}
            fill="none"
            stroke={isPositive ? '#10b981' : '#ef4444'}
            strokeWidth="2"
            className="drop-shadow-sm"
          />
          
          {/* Fill area under curve */}
          <path
            d={`${generatePath()} L 300,100 L 0,100 Z`}
            fill={`url(#gradient-${isPositive ? 'green' : 'red'})`}
            opacity="0.2"
          />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradient-green" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="gradient-red" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Price range labels */}
        <div className="flex justify-between text-xs text-crypto-gray mt-2">
          <span>${minPrice.toFixed(2)}</span>
          <span>${maxPrice.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="mt-3 text-center">
        <div className="text-sm text-crypto-gray">24h Range</div>
        <div className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '↗' : '↘'} {Math.abs(priceChange).toFixed(2)}%
        </div>
      </div>
    </div>
  );
}