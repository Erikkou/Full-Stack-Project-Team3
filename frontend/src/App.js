// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import BackgroundSection from './components/BackgroundSection';

const App = () => {
  return (
    <Router>
      <div className="App">   
        
        <Navbar />
        <BackgroundSection />
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/about"
            element={
              <>
                <h2>Over Ons</h2>
                <p>Dit is een voorbeeldpagina over de app.</p>
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
