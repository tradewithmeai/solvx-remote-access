import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConnectPage } from './ui/pages/ConnectPage';
import { RemotePage } from './ui/pages/RemotePage';
import { SettingsPage } from './ui/pages/SettingsPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConnectPage />} />
        <Route path="/remote/:id" element={<RemotePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
