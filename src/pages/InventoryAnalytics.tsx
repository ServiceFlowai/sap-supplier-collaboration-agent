import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', coverage: 80, turns: 4.2, buffer: 65 },
  { name: 'Feb', coverage: 85, turns: 4.5, buffer: 70 },
  { name: 'Mar', coverage: 78, turns: 4.0, buffer: 60 },
];

const InventoryAnalytics = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory Analytics</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="coverage" fill="#8884d8" />
          <Bar dataKey="turns" fill="#82ca9d" />
          <Bar dataKey="buffer" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventoryAnalytics;