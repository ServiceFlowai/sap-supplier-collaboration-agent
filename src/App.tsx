import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Dashboard from './pages/Dashboard';
import Forecast from './pages/Forecast';
import Messaging from './pages/Messaging';

function App() {
  return (
    <Auth0Provider
      domain="YOUR_AUTH0_DOMAIN"
      clientId="YOUR_AUTH0_CLIENT_ID"
      redirectUri={window.location.origin}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/messaging" element={<Messaging />} />
      </Routes>
    </Auth0Provider>
  );
}

export default App;