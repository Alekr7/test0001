// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter = routeur SPA (→ navigation côté client)
import './index.css';
import App from './App';
import './i18n'; // i18n = internationalisation (chargement des traductions)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* StrictMode = garde-fous dev, pas utilisé en prod */}
    <BrowserRouter basename="/test0001"> {/* basename = préfixe d’URL sous GitHub Pages */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
