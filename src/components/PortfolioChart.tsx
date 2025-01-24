import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { PortfolioData } from '../types';

interface Props {
  data: PortfolioData[];
}

export const PortfolioChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(date) => format(new Date(date), 'MMM d')}
          />
          <YAxis />
          <Tooltip 
            labelFormatter={(date) => format(new Date(date), 'MMM d, yyyy')}
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
          />
          <Line 
            type="monotone" 
            dataKey="totalValue" 
            stroke="#6366f1" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};