import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ForecastDistribution from './pages/ForecastDistribution';
import SupplierCommit from './pages/SupplierCommit';
import Notifications from './pages/Notifications';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/forecast-distribution" element={<ForecastDistribution />} />
        <Route path="/supplier-commit" element={<SupplierCommit />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
}

export default App;