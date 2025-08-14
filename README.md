# CryptoDash - Advanced Cryptocurrency Dashboard

A modern, feature-rich cryptocurrency dashboard built with Next.js 15, React 19, and TypeScript. CryptoDash provides real-time cryptocurrency tracking, portfolio management, and advanced analytics with a focus on performance and user experience.

## 🚀 Phase 3 Features

This application represents the complete Phase 3 implementation for CPAN144, featuring:

### 📊 Portfolio Management
- **Portfolio Summary Dashboard**: Comprehensive analytics with tracked coins, combined value, and market cap
- **Performance Tracking**: Best/worst performer identification with color-coded metrics
- **Visual Distribution**: Interactive portfolio distribution chart with percentage breakdown
- **Real-time Statistics**: Live updates of portfolio performance and 24-hour changes

### ⚡ Performance Optimizations
- **Code Splitting**: Lazy loading with dynamic imports and React.memo optimization
- **State Management**: Centralized context-based state management with localStorage persistence
- **Optimized Rendering**: useCallback and useMemo hooks to prevent unnecessary re-renders
- **Production Build**: Optimized bundles with automatic console.log removal

### 🛡️ Error Handling & Resilience
- **Error Boundaries**: Comprehensive error handling with development/production modes
- **Loading States**: Professional loading spinners and skeleton screens
- **Graceful Degradation**: Fallback components for better user experience
- **Type Safety**: Full TypeScript implementation with proper interfaces

## ✨ Key Features

- **Real-time Price Tracking**: Live cryptocurrency prices with 24-hour change indicators
- **Advanced Search**: Intelligent search functionality with instant filtering
- **Favorites Management**: Persistent favorites with localStorage synchronization
- **Comparison Tool**: Side-by-side comparison of up to 4 cryptocurrencies
- **Responsive Design**: Mobile-first design with comprehensive breakpoints
- **Dark Theme**: Modern dark UI optimized for crypto trading environments

## 🏗️ Architecture

### Technology Stack
- **Framework**: Next.js 15.4.6 with App Router
- **Frontend**: React 19 with TypeScript
- **Styling**: CSS Modules with responsive design
- **State Management**: React Context with localStorage persistence
- **Build Tools**: Turbopack for fast development builds
- **Performance**: React.memo, useCallback, useMemo optimizations

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page with tech stack info
│   ├── compare/           # Cryptocurrency comparison tool
│   ├── favorites/         # Portfolio management with analytics
│   └── globals.css        # Global styles and CSS variables
├── components/
│   ├── layout/            # Navigation and footer components
│   └── ui/                # Reusable UI components
│       ├── CoinCard.tsx   # Cryptocurrency display card
│       ├── PriceList.tsx  # Optimized cryptocurrency grid
│       ├── SearchBar.tsx  # Intelligent search component
│       ├── PortfolioSummary.tsx  # Advanced portfolio analytics
│       ├── ErrorBoundary.tsx     # Error handling component
│       └── LoadingSpinner.tsx    # Loading state component
├── contexts/
│   └── FavoritesContext.tsx     # Global state management
└── utils/
    └── mockData.ts        # Cryptocurrency data and utilities
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/deresamad/crypto_dashboard.git
cd crypto_dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📱 Usage Guide

### Managing Favorites
1. **Add Favorites**: Click the star (☆) icon on any cryptocurrency card
2. **View Portfolio**: Navigate to the Favorites page to see your portfolio analytics
3. **Portfolio Summary**: View statistics including combined value, market cap, and performance metrics
4. **Remove Favorites**: Click the filled star (⭐) to remove from portfolio

### Comparing Cryptocurrencies
1. Navigate to the Compare page
2. Search and select up to 4 cryptocurrencies
3. View side-by-side comparison with prices, changes, and market caps
4. Remove coins from comparison to add new ones

### Search and Filter
- Use the search bar to find cryptocurrencies by name or symbol
- Search is case-insensitive and provides instant results
- Clear search with the × button

## 🔧 Performance Features

### Optimization Techniques
- **React.memo**: Prevents unnecessary component re-renders
- **useCallback**: Memoizes event handlers and functions
- **useMemo**: Caches expensive calculations and filtered data
- **Context API**: Centralized state management with minimal re-renders
- **Code Splitting**: Lazy loading of non-critical components

### Production Optimizations
- Automatic console.log removal in production builds
- Optimized image formats (WebP, AVIF)
- Security headers for enhanced protection
- CSS optimization and minification
- Bundle analysis and tree shaking

## 🎨 UI/UX Features

### Responsive Design
- **Mobile-first**: Optimized for mobile devices with progressive enhancement
- **Breakpoints**: Comprehensive responsive design for all screen sizes
- **Touch-friendly**: Large touch targets and intuitive gestures
- **Performance**: Optimized animations and transitions

### Accessibility
- **ARIA Labels**: Comprehensive screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color schemes
- **Focus Management**: Clear focus indicators and logical tab order

## 📊 Data & Analytics

### Portfolio Analytics
- **Combined Value**: Total value of all favorite cryptocurrencies
- **Market Cap Tracking**: Sum of all favorite coins' market capitalizations
- **Performance Metrics**: Average 24-hour change across portfolio
- **Best/Worst Performers**: Automatic identification of top gainers/losers
- **Distribution Chart**: Visual representation of portfolio allocation

### Mock Data
The application uses carefully crafted mock data that simulates real cryptocurrency market behavior:
- 8 popular cryptocurrencies (Bitcoin, Ethereum, BNB, Cardano, Solana, XRP, Polkadot, Dogecoin)
- Realistic price points and market capitalizations
- Varied 24-hour performance changes
- Emoji-based icons for visual appeal

## 🛡️ Error Handling

- **Error Boundaries**: Catch and handle React component errors gracefully
- **Development Mode**: Detailed error messages and stack traces
- **Production Mode**: User-friendly error messages with refresh option
- **LocalStorage Recovery**: Automatic recovery from corrupted localStorage data
- **Network Resilience**: Graceful handling of data loading states

## 📝 Development

### Code Quality
- **TypeScript**: Full type safety with strict mode enabled
- **ESLint**: Code linting with Next.js recommended rules
- **Prettier**: Code formatting for consistency
- **Git Hooks**: Pre-commit quality checks

### Best Practices
- **Component Architecture**: Reusable, composable components
- **Performance First**: Optimized rendering and state management
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO Optimized**: Semantic HTML and meta tags

## 🚀 Deployment

### Recommended Platforms
- **Vercel**: Optimized for Next.js with automatic deployments
- **Netlify**: Static site hosting with continuous deployment
- **AWS Amplify**: Full-stack deployment with CI/CD
- **Docker**: Containerized deployment for any platform

### Environment Variables
No environment variables required for basic functionality. The application uses mock data and client-side storage.

## 📄 License

This project is for educational purposes as part of the CPAN144 course.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Support

For questions about this educational project, please refer to the course materials or contact the development team.

---

**Built with ❤️ using Next.js and React for CPAN144 - Phase 3 Implementation**
