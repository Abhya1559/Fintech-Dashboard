import { PortfolioData, AssetAllocation, Strategy, MarketUpdate } from './types';

export const portfolioData: PortfolioData[] = Array.from({ length: 30 }, (_, i) => ({
  id: `day-${i + 1}`,
  date: new Date(2024, 1, i + 1).toISOString(),
  totalValue: 100000 + Math.random() * 50000,
  dailyPnL: (Math.random() * 2000) - 1000,
  winRate: 0.5 + (Math.random() * 0.3)
}));

export const assetAllocation: AssetAllocation[] = [
  { name: 'Stocks', value: 45 },
  { name: 'Bonds', value: 25 },
  { name: 'Real Estate', value: 15 },
  { name: 'Crypto', value: 10 },
  { name: 'Cash', value: 5 }
];

export const strategies: Strategy[] = [
  {
    id: '1',
    name: 'Growth Strategy',
    roi: 15.7,
    cagr: 12.3,
    drawdown: -8.5,
    description: 'Focus on high-growth technology and emerging markets'
  },
  {
    id: '2',
    name: 'Value Strategy',
    roi: 10.2,
    cagr: 8.9,
    drawdown: -5.2,
    description: 'Emphasis on undervalued blue-chip stocks'
  },
  {
    id: '3',
    name: 'Dividend Strategy',
    roi: 8.5,
    cagr: 7.4,
    drawdown: -3.8,
    description: 'Priority on stable dividend-paying companies'
  }
];

export const marketUpdates: MarketUpdate[] = [
  {
    id: '1',
    title: 'Increased Tech Exposure',
    date: new Date(2024, 2, 15).toISOString(),
    type: 'buy',
    asset: 'AAPL',
    price: 182.52,
    quantity: 50
  },
  {
    id: '2',
    title: 'Reduced Energy Position',
    date: new Date(2024, 2, 14).toISOString(),
    type: 'sell',
    asset: 'XOM',
    price: 104.78,
    quantity: 75
  },
  {
    id: '3',
    title: 'New Position in AI Sector',
    date: new Date(2024, 2, 13).toISOString(),
    type: 'buy',
    asset: 'NVDA',
    price: 788.17,
    quantity: 25
  }
];