import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <Link to="/forecast-distribution" className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold">Forecast Distribution</h2>
          <p>Push forecasts to suppliers via portal, EDI/API, and email.</p>
        </Link>
        <Link to="/supplier-commit" className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold">Supplier Commit</h2>
          <p>Manage supplier commitments and lead times.</p>
        </Link>
        <Link to="/notifications" className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <p>Automated notifications for high-risk exceptions.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;