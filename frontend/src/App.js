// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={
            <>
              <h2>Over Ons</h2>
              <p>Dit is een voorbeeldpagina over de app.</p>
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
