import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={
            <div>
              <h2>Over Ons</h2>
              <p>Dit is een voorbeeldpagina over de app.</p>
            </div>
          } />
          <Route path="/contact" element={
            <div>
              <h2>Contact</h2>
              <p>Neem contact met ons op via contact@example.com.</p>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
