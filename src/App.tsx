import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DataIngestion from './pages/DataIngestion';
import ForecastModels from './pages/ForecastModels';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/data-ingestion" element={<DataIngestion />} />
        <Route path="/forecast-models" element={<ForecastModels />} />
      </Routes>
    </div>
  );
}

export default App;