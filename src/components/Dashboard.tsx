import React, { useState } from "react";
import { PortfolioChart } from "./PortfolioChart";
import { AllocationChart } from "./AllocationChart";
import { MetricsGrid } from "./MetricsGrid";
import { StrategyTable } from "./StrategyTable";
import { MarketUpdates } from "./MarketUpdates";
import {
  portfolioData,
  assetAllocation,
  strategies,
  marketUpdates,
} from "../data";
import {
  Bell,
  Settings,
  Search,
  Download,
  Calendar,
  Filter,
} from "lucide-react";

export const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center flex-1">
              <div className="flex-shrink-0">
                <a
                  href=""
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
                >
                  FinDash
                </a>
              </div>
              <div className="ml-8 flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-white/50 backdrop-blur-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Search assets, strategies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Settings className="h-6 w-6" />
              </button>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Portfolio Overview
              </h2>
              <p className="mt-1 text-gray-500">
                Track your investment performance and insights
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-md rounded-lg px-4 py-2 border border-gray-200">
                <Calendar className="h-5 w-5 text-gray-400" />
                <select className="bg-transparent border-none focus:ring-0 text-gray-700">
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                  <option value="1y">Last Year</option>
                </select>
              </div>
              <button className="flex items-center space-x-2 bg-white/80 backdrop-blur-md rounded-lg px-4 py-2 border border-gray-200 text-gray-700 hover:bg-gray-50">
                <Filter className="h-5 w-5" />
                <span>Filter</span>
              </button>
              <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg px-4 py-2 hover:opacity-90 transition-opacity">
                <Download className="h-5 w-5" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="mt-8">
            <MetricsGrid data={portfolioData[portfolioData.length - 1]} />
          </div>

          {/* Charts Section */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Portfolio Performance
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Daily portfolio value and returns
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    1D
                  </button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    1W
                  </button>
                  <button className="text-sm bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md">
                    1M
                  </button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    1Y
                  </button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    ALL
                  </button>
                </div>
              </div>
              <PortfolioChart data={portfolioData} />
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Asset Allocation
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Current portfolio distribution
                </p>
              </div>
              <AllocationChart data={assetAllocation} />
            </div>
          </div>

          {/* Strategy Performance */}
          <div className="mt-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Strategy Performance
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Compare and analyze strategy returns
                </p>
              </div>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                View All Strategies
              </button>
            </div>
            <StrategyTable strategies={strategies} />
          </div>

          {/* Market Updates */}
          <div className="mt-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Recent Market Updates
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Latest trading activity and market news
                </p>
              </div>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                View All Updates
              </button>
            </div>
            <MarketUpdates updates={marketUpdates} />
          </div>
        </div>
      </div>
    </div>
  );
};
