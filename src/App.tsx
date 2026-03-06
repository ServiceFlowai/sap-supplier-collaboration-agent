import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import InventoryAnalytics from './pages/InventoryAnalytics';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory-analytics" element={<InventoryAnalytics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;