import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterMissingParts } from './pages/register_missing_parts/RegisterMissingParts.jsx';
import { ListRegistersMissingParts } from './pages/list_registers_missing_parts/ListRegistersMissingParts.jsx';
import { MissingParts } from './pages/missing_parts/MissingParts.jsx';
import { Merchandise } from './pages/merchandise/Merchandise.jsx';
import { RegisterMerchandise } from './pages/register_merchandise/RegisterMerchandise.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<h1>Not Found</h1>}/>
      <Route index path="/" element={<App />}/>
      <Route index path="/registrar-pzs-faltantes" element={<RegisterMissingParts />}/>
      <Route index path="/lista-registro-pzs-faltantes" element={<ListRegistersMissingParts />}/>
      <Route index path="/pzs-faltantes" element={<MissingParts />}/>
      <Route index path="/mercancias" element={<Merchandise />}/>
      <Route index path="/mercancias/registrar" element={<RegisterMerchandise />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
