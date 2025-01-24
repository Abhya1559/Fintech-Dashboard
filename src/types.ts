export interface PortfolioData {
  id: string;
  date: string;
  totalValue: number;
  dailyPnL: number;
  winRate: number;
}

export interface AssetAllocation {
  name: string;
  value: number;
}

export interface Strategy {
  id: string;
  name: string;
  roi: number;
  cagr: number;
  drawdown: number;
  description: string;
}

export interface MarketUpdate {
  id: string;
  title: string;
  date: string;
  type: 'buy' | 'sell';
  asset: string;
  price: number;
  quantity: number;
}