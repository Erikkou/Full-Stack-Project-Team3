// frontend/src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import SignUp from './components/SignUp';
import Login from './components/Login';
import About from './components/About';
import BackgroundSection from './components/BackgroundSection';

const App = () => {
  const [currentSection, setCurrentSection] = useState('main');

  const showMain = () => setCurrentSection('main');
  const showSignUp = () => setCurrentSection('signup');
  const showLogin = () => setCurrentSection('login');
  const showAbout = () => setCurrentSection('about');

  return (
    <div className="App">
      <Navbar 
        showMain={showMain} 
        showSignUp={showSignUp} 
        showLogin={showLogin} 
        showAbout={showAbout} 
      />
      <BackgroundSection />

      {/* Render de juiste sectie op basis van de currentSection state */}
      {currentSection === 'main' && <Main />}
      {currentSection === 'signup' && <SignUp />}
      {currentSection === 'login' && <Login />}
      {currentSection === 'about' && <About />}
    </div>
  );
};

export default App;
