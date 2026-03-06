import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Summary Card 1</h2>
          <p>Details about summary card 1.</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Summary Card 2</h2>
          <p>Details about summary card 2.</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Summary Card 3</h2>
          <p>Details about summary card 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;