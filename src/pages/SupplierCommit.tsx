import React, { useState } from 'react';

const SupplierCommit = () => {
  const [commitments, setCommitments] = useState([
    { id: 1, supplier: 'Supplier A', sku: 'SKU123', committed: 900 },
    { id: 2, supplier: 'Supplier B', sku: 'SKU456', committed: 1400 }
  ]);

  const handleCommit = (id: number) => {
    alert(`Commitment for ID ${id} confirmed.`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Supplier Commit</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Supplier</th>
            <th className="py-2">SKU</th>
            <th className="py-2">Committed</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {commitments.map((commitment) => (
            <tr key={commitment.id} className="border-t">
              <td className="py-2">{commitment.supplier}</td>
              <td className="py-2">{commitment.sku}</td>
              <td className="py-2">{commitment.committed}</td>
              <td className="py-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => handleCommit(commitment.id)}
                >
                  Confirm
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierCommit;