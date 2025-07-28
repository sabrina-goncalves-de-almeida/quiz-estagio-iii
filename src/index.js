import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/Home/index.css';
import Home from './pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
