import React, { useState } from 'react';
import axios from 'axios';

const DataIngestion = () => {
  const [sapData, setSapData] = useState([]);
  const [externalSignals, setExternalSignals] = useState([]);

  const fetchSapData = async () => {
    try {
      const response = await axios.get('/api/sap-data');
      setSapData(response.data);
    } catch (error) {
      console.error('Error fetching SAP data:', error);
    }
  };

  const fetchExternalSignals = async () => {
    try {
      const response = await axios.get('/api/external-signals');
      setExternalSignals(response.data);
    } catch (error) {
      console.error('Error fetching external signals:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Data Ingestion</h1>
      <button onClick={fetchSapData} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Fetch SAP Data</button>
      <button onClick={fetchExternalSignals} className="bg-green-500 text-white px-4 py-2 rounded mb-4 ml-2">Fetch External Signals</button>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">SAP Data</h2>
        <pre>{JSON.stringify(sapData, null, 2)}</pre>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">External Signals</h2>
        <pre>{JSON.stringify(externalSignals, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DataIngestion;