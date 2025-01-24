import React from "react";
import { LineChart, BarChart, ArrowRight } from "lucide-react";

interface Props {
  onEnterDashboard: () => void;
}

export const LandingPage: React.FC<Props> = ({ onEnterDashboard }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2 hover:scale-150">
              <LineChart className="h-8 w-8 text-indigo-600 " />
              <span className="text-xl font-bold text-gray-900">FinDash</span>
            </div>
            <button
              onClick={onEnterDashboard}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Launch Dashboard
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Portfolio,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Reimagined
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Experience portfolio analytics like never before with our
              powerful, intuitive dashboard. Track performance, analyze
              strategies, and make informed decisions.
            </p>

            <button
              onClick={onEnterDashboard}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              Enter Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<LineChart className="w-8 h-8 text-indigo-600" />}
              title="Real-time Analytics"
              description="Track your portfolio performance with live updates and comprehensive analytics."
            />
            <FeatureCard
              icon={<BarChart className="w-8 h-8 text-indigo-600" />}
              title="Strategy Insights"
              description="Compare and analyze different investment strategies to optimize returns."
            />
            <FeatureCard
              icon={<LineChart className="w-8 h-8 text-indigo-600" />}
              title="Smart Reporting"
              description="Generate detailed reports and insights about your investment performance."
            />
          </div>
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © 2024 FinDash. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
    <div className="bg-indigo-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
