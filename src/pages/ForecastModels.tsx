import React, { useState } from 'react';

const ForecastModels = () => {
  const [forecastData, setForecastData] = useState({
    baseline: [],
    mlModel: [],
  });

  const generateForecast = () => {
    // Mock data for baseline and ML models
    const baselineForecast = [
      { sku: 'SKU1', forecast: 100 },
      { sku: 'SKU2', forecast: 150 },
    ];
    const mlModelForecast = [
      { sku: 'SKU1', forecast: 110 },
      { sku: 'SKU2', forecast: 140 },
    ];
    setForecastData({ baseline: baselineForecast, mlModel: mlModelForecast });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Forecast Models</h1>
      <button onClick={generateForecast} className="bg-purple-500 text-white px-4 py-2 rounded mb-4">Generate Forecast</button>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Baseline Forecast</h2>
        <pre>{JSON.stringify(forecastData.baseline, null, 2)}</pre>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">ML Model Forecast</h2>
        <pre>{JSON.stringify(forecastData.mlModel, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ForecastModels;