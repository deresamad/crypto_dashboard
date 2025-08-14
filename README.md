# CryptoDash - Cryptocurrency Dashboard

A modern, responsive web application built with Next.js and React that provides real-time cryptocurrency market data with advanced features for tracking, comparing, and managing your favorite cryptocurrencies.

![CryptoDash Interface](https://github.com/user-attachments/assets/e6601234-67dd-4d14-bae2-5caf413c4bc8)

## 🚀 Features

### Core Functionality
- **Real-time Cryptocurrency Prices**: Track up-to-date prices with 24-hour change indicators
- **Smart Search**: Quickly find cryptocurrencies by name or symbol
- **Favorites Management**: Save and manage your favorite cryptocurrencies with local storage
- **Compare Tool**: Side-by-side comparison of up to 4 cryptocurrencies
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Advanced Features
- **Global State Management**: Synchronized favorites across all pages using React Context
- **Performance Optimizations**: Code splitting, lazy loading, and optimized bundles
- **Error Boundaries**: Graceful error handling throughout the application
- **Loading States**: Smooth loading experiences with custom loading components
- **Type Safety**: Full TypeScript implementation for better code quality

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Frontend**: React 18 with TypeScript
- **Styling**: CSS Modules with responsive design
- **State Management**: React Context API with custom hooks
- **Performance**: Code splitting, lazy loading, and bundle optimization
- **Development**: ESLint for code quality and consistency

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd crypto_dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build and Deployment

### Development
```bash
npm run dev          # Start development server
npm run lint         # Run ESLint
```

### Production
```bash
npm run build        # Build for production
npm run start        # Start production server
```

## 📱 Usage Guide

### Getting Started
1. **Browse Cryptocurrencies**: Explore the home page to see all available cryptocurrencies
2. **Add Favorites**: Click the star icon (☆) on any coin to add it to favorites
3. **Compare Coins**: Use the Compare page to analyze up to 4 cryptocurrencies
4. **Manage Favorites**: Visit the Favorites page to manage your saved cryptocurrencies

### Key Pages
- **Home (`/`)**: Main dashboard with cryptocurrency listings
- **Compare (`/compare`)**: Side-by-side cryptocurrency comparison tool
- **Favorites (`/favorites`)**: Personal dashboard for saved cryptocurrencies
- **About (`/about`)**: Information about the application and features

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#f39c12` - Used for highlights and interactive elements
- **Secondary Orange**: `#e67e22` - Used for hover states
- **Background Dark**: `#0a0a0a` - Main background color
- **Card Background**: `#1a1a2e` - Card and component backgrounds
- **Text Light**: `#cccccc` - Primary text color
- **Text Muted**: `#999999` - Secondary text color

### Typography
- **Primary Font**: System fonts optimized for readability
- **Weights**: 400 (normal), 500 (medium), 600 (semi-bold), 700 (bold), 800 (extra-bold)

## 🔧 Architecture

### Component Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── (pages)/           # Page components
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Layout components (Header, Footer)
│   └── ui/               # Reusable UI components
├── contexts/              # React Context providers
├── utils/                 # Utility functions and data
└── styles/               # Global styles
```

### Key Components
- **FavoritesContext**: Global state management for favorites
- **ErrorBoundary**: Error handling wrapper
- **Loading**: Reusable loading component
- **PriceList**: Cryptocurrency listing component
- **SearchBar**: Smart search functionality

## ⚡ Performance Optimizations

### Code Splitting
- Lazy loading of heavy components using `React.lazy()`
- Dynamic imports for better bundle management
- Suspense boundaries for loading states

### Bundle Optimization
- Next.js automatic code splitting
- Tree shaking for unused code elimination
- Optimized image formats (WebP, AVIF)
- Console removal in production builds

### Current Bundle Sizes
```
Route (app)                                 Size  First Load JS
┌ ○ /                                     1.7 kB         102 kB
├ ○ /compare                             2.69 kB         103 kB
├ ○ /favorites                           3.13 kB         107 kB
└ ○ /about                                 451 B         100 kB
+ First Load JS shared by all             100 kB
```

## 🧪 Testing & Quality Assurance

### Code Quality
- ESLint configuration for consistent code style
- TypeScript for type safety
- Error boundaries for graceful error handling

### Browser Testing
- Responsive design tested across device sizes
- Cross-browser compatibility
- Performance optimization validated

## 📊 Data Management

### Mock Data Structure
The application uses mock cryptocurrency data with the following structure:
```typescript
interface CryptoCoin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  image: string;
}
```

### Local Storage
- Favorites are persisted using browser localStorage
- Automatic synchronization across browser sessions
- Error handling for storage limitations

## 🔒 Security Considerations

- **Data Validation**: Input sanitization and validation
- **Error Handling**: Graceful error boundaries prevent crashes
- **Type Safety**: TypeScript prevents runtime type errors

## ⚠️ Important Disclaimers

- **Mock Data**: This application uses mock data for demonstration purposes
- **Educational Use**: Built for educational purposes as part of CPAN144 coursework
- **Not for Trading**: Do not use displayed prices for actual cryptocurrency trading

## 🚧 Future Enhancements

### Potential Features
- Real cryptocurrency API integration
- Portfolio tracking functionality
- Price alerts and notifications
- Historical price charts
- Dark/light theme toggle
- User authentication
- Export functionality

### Performance Improvements
- Service worker for offline functionality
- Progressive Web App (PWA) features
- Advanced caching strategies
- Real-time price updates

## 👥 Contributing

This project was developed as part of the CPAN144 group project. For educational purposes, please follow these guidelines:

1. Follow the existing code style and conventions
2. Add tests for new functionality
3. Update documentation as needed
4. Ensure responsive design compatibility

## 📄 License

This project is for educational purposes only. All rights reserved.

---

**Built with ❤️ using Next.js, React, and TypeScript**

*Phase 3 Implementation - CPAN144 Group Project*
