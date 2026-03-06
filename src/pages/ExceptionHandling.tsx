import React, { useState } from 'react';

const ExceptionHandling: React.FC = () => {
  const [exceptions, setExceptions] = useState([
    { id: 1, description: 'Stock-out risk for SKU123', priority: 'High' },
    { id: 2, description: 'Delayed shipment from Supplier B', priority: 'Medium' }
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Exception Handling</h1>
      <ul className="list-disc pl-5">
        {exceptions.map(exception => (
          <li key={exception.id} className="mb-2">
            <span className="font-semibold">{exception.priority}:</span> {exception.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExceptionHandling;