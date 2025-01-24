import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className={`transition-all duration-500 ease-in-out transform ${
        showDashboard ? 'opacity-0 -translate-x-full hidden' : 'opacity-100 translate-x-0'
      }`}>
        <LandingPage onEnterDashboard={() => setShowDashboard(true)} />
      </div>
      
      <div className={`transition-all duration-500 ease-in-out transform ${
        showDashboard ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full hidden'
      }`}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;