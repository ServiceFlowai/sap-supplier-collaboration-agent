import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'Reminder', message: 'Forecast update needed for SKU123' },
    { id: 2, type: 'Escalation', message: 'High-risk exception for SKU456' }
  ]);

  const handleSendNotification = (id: number) => {
    alert(`Notification ID ${id} sent.`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Type</th>
            <th className="py-2">Message</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification.id} className="border-t">
              <td className="py-2">{notification.type}</td>
              <td className="py-2">{notification.message}</td>
              <td className="py-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleSendNotification(notification.id)}
                >
                  Send
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notifications;