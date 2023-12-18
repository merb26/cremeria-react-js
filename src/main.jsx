import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterMissingParts } from './pages/register_missing_parts/RegisterMissingParts.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<h1>Not Found</h1>}/>
      <Route index path="/" element={<App />}/>
      <Route index path="/registrar-pzs-faltantes" element={<RegisterMissingParts />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
