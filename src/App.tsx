import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CommitmentUpdate from './pages/CommitmentUpdate';
import ExceptionHandling from './pages/ExceptionHandling';
import VMIFlows from './pages/VMIFlows';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/commitment-update" element={<CommitmentUpdate />} />
        <Route path="/exception-handling" element={<ExceptionHandling />} />
        <Route path="/vmi-flows" element={<VMIFlows />} />
      </Routes>
    </div>
  );
};

export default App;