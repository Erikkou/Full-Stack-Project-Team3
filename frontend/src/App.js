import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundSection from './components/BackgroundSection';
import MainContent from './components/MainContent';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const handleLoginClick = () => {
    setCurrentPage('login');
  };

  const handleSignUpClick = () => {
    setCurrentPage('signup');
  };

  const handleBackClick = () => {
    setCurrentPage('main');
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
          <LoginPage handleBackClick={handleBackClick} />
        </BackgroundSection>
      )}
      {currentPage === 'signup' && (
        <BackgroundSection>
          <SignUpPage handleBackClick={handleBackClick} /> {/* Voeg SignUpPage hier toe */}
        </BackgroundSection>
      )}
      <Footer />
    </div>
  );
};

export default App;
