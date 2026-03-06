import React, { useState } from 'react';

const ForecastDistribution = () => {
  const [forecasts, setForecasts] = useState([
    { id: 1, supplier: 'Supplier A', sku: 'SKU123', forecast: 1000 },
    { id: 2, supplier: 'Supplier B', sku: 'SKU456', forecast: 1500 }
  ]);

  const handleSendForecast = (id: number) => {
    alert(`Forecast for ID ${id} sent to supplier.`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Forecast Distribution</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Supplier</th>
            <th className="py-2">SKU</th>
            <th className="py-2">Forecast</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.id} className="border-t">
              <td className="py-2">{forecast.supplier}</td>
              <td className="py-2">{forecast.sku}</td>
              <td className="py-2">{forecast.forecast}</td>
              <td className="py-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handleSendForecast(forecast.id)}
                >
                  Send
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastDistribution;