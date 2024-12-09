// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.css';  // Zorg ervoor dat de algemene stijlen geladen worden

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
