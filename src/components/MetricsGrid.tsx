import React from 'react';
import { TrendingUp, TrendingDown, Percent, DollarSign } from 'lucide-react';
import { PortfolioData } from '../types';

interface Props {
  data: PortfolioData;
}

export const MetricsGrid: React.FC<Props> = ({ data }) => {
  const isPositivePnL = data.dailyPnL >= 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <MetricCard
        title="Total Portfolio Value"
        value={`$${data.totalValue.toLocaleString()}`}
        icon={<DollarSign className="h-6 w-6 text-white" />}
        trend={+5.2}
        gradientFrom="from-green-500"
        gradientTo="to-emerald-500"
      />
      <MetricCard
        title="Daily P&L"
        value={`${isPositivePnL ? '+' : ''}$${Math.abs(data.dailyPnL).toLocaleString()}`}
        icon={isPositivePnL ? 
          <TrendingUp className="h-6 w-6 text-white" /> : 
          <TrendingDown className="h-6 w-6 text-white" />}
        trend={isPositivePnL ? +2.4 : -2.4}
        gradientFrom={isPositivePnL ? "from-indigo-500" : "from-red-500"}
        gradientTo={isPositivePnL ? "to-blue-500" : "to-pink-500"}
      />
      <MetricCard
        title="Win Rate"
        value={`${(data.winRate * 100).toFixed(1)}%`}
        icon={<Percent className="h-6 w-6 text-white" />}
        trend={+1.8}
        gradientFrom="from-purple-500"
        gradientTo="to-pink-500"
      />
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: number;
  gradientFrom: string;
  gradientTo: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  gradientFrom, 
  gradientTo 
}) => (
  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div className={`p-3 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
    </div>
    <div className="mt-4 flex items-center">
      <span className={`text-sm font-medium ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {trend >= 0 ? '+' : ''}{trend}%
      </span>
      <span className="text-sm text-gray-500 ml-2">vs last period</span>
    </div>
  </div>
);