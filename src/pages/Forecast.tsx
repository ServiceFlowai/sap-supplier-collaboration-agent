import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const sampleData = [
  { name: 'Jan', forecast: 400 },
  { name: 'Feb', forecast: 300 },
  { name: 'Mar', forecast: 500 },
  { name: 'Apr', forecast: 200 },
];

const Forecast = () => {
  const [comments, setComments] = useState('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(e.target.value);
  };

  const handleSubmit = () => {
    alert('Comments submitted: ' + comments);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Forecast Dashboard</h1>
      <LineChart width={600} height={300} data={sampleData}>
        <Line type="monotone" dataKey="forecast" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <div className="mt-4">
        <textarea
          className="w-full p-2 border rounded"
          rows={4}
          value={comments}
          onChange={handleCommentChange}
          placeholder="Add your comments here..."
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleSubmit}
        >
          Submit Comments
        </button>
      </div>
    </div>
  );
};

export default Forecast;