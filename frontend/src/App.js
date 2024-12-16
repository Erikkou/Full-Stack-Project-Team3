// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundSection from './components/BackgroundSection';
import MainContent from './components/MainContent';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const handleLoginClick = () => {
    setCurrentPage('login');
  };

  const handleSignUpClick = () => {
    setCurrentPage('signup');
  };

  return (
    <div className="App">
      <Navbar
        showMain={() => setCurrentPage('main')}
        showSignUp={handleSignUpClick}
        showLogin={handleLoginClick}
      />
      {currentPage === 'main' && (
        <BackgroundSection>
          <MainContent
            handleLoginClick={handleLoginClick}
            handleSignUpClick={handleSignUpClick}
          />
        </BackgroundSection>
      )}
      {currentPage === 'login' && (
        <BackgroundSection>
          <div style={{ color: 'white', textAlign: 'center' }}>
            <h2>Login Page Placeholder</h2>
          </div>
        </BackgroundSection>
      )}
      {currentPage === 'signup' && (
        <BackgroundSection>
          <div style={{ color: 'white', textAlign: 'center' }}>
            <h2>Signup Page Placeholder</h2>
          </div>
        </BackgroundSection>
      )}
      <Footer />
    </div>
  );
};

export default App;
