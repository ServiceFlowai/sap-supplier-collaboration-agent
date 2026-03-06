import React, { useState } from 'react';

const CommitmentUpdate: React.FC = () => {
  const [commitments, setCommitments] = useState([
    { id: 1, supplier: 'Supplier A', sku: 'SKU123', commitment: 100 },
    { id: 2, supplier: 'Supplier B', sku: 'SKU456', commitment: 200 }
  ]);

  const handleUpdate = (id: number) => {
    // Logic to update commitment to SAP
    console.log(`Updating commitment for ID: ${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Commitment Update</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Supplier</th>
            <th className="py-2">SKU</th>
            <th className="py-2">Commitment</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {commitments.map(commitment => (
            <tr key={commitment.id}>
              <td className="py-2">{commitment.supplier}</td>
              <td className="py-2">{commitment.sku}</td>
              <td className="py-2">{commitment.commitment}</td>
              <td className="py-2">
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handleUpdate(commitment.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommitmentUpdate;