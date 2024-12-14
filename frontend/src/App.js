// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundSection from './components/BackgroundSection';

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
        <BackgroundSection handleLoginClick={handleLoginClick} handleSignUpClick={handleSignUpClick} />
      )}
      {currentPage === 'login' && <div>Login Page Placeholder</div>}
      {currentPage === 'signup' && <div>Signup Page Placeholder</div>}
      <Footer />
    </div>
  );
};

export default App;
