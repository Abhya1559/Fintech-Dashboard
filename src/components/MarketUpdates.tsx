import React from 'react';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { MarketUpdate } from '../types';
import { format } from 'date-fns';

interface Props {
  updates: MarketUpdate[];
}

export const MarketUpdates: React.FC<Props> = ({ updates }) => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {updates.map((update, updateIdx) => (
          <li key={update.id}>
            <div className="relative pb-8">
              {updateIdx !== updates.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                    update.type === 'buy' ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {update.type === 'buy' ? (
                      <ArrowUpCircle className="h-5 w-5 text-white" />
                    ) : (
                      <ArrowDownCircle className="h-5 w-5 text-white" />
                    )}
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {update.title}{' '}
                      <span className="font-medium text-gray-900">
                        {update.quantity} {update.asset} @ ${update.price}
                      </span>
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    {format(new Date(update.date), 'MMM d, yyyy')}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};