import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Inventory Coverage</h2>
          <p className="text-gray-600">85%</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Inventory Turns</h2>
          <p className="text-gray-600">4.5</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Buffer Utilization</h2>
          <p className="text-gray-600">70%</p>
        </div>
      </div>
      <Link to="/inventory-analytics" className="mt-4 inline-block text-blue-500">View Inventory Analytics</Link>
    </div>
  );
};

export default Dashboard;