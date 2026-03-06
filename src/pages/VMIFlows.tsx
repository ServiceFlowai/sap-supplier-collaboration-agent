import React, { useState } from 'react';

const VMIFlows: React.FC = () => {
  const [contracts, setContracts] = useState([
    { id: 1, supplier: 'Supplier A', sku: 'SKU123', status: 'Active' },
    { id: 2, supplier: 'Supplier B', sku: 'SKU456', status: 'Pending' }
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vendor-Managed Inventory Flows</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Supplier</th>
            <th className="py-2">SKU</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map(contract => (
            <tr key={contract.id}>
              <td className="py-2">{contract.supplier}</td>
              <td className="py-2">{contract.sku}</td>
              <td className="py-2">{contract.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VMIFlows;