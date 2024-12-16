// src/components/MainContent.js
import React from 'react';

const MainContent = ({ handleLoginClick, handleSignUpClick }) => {
  return (
    <div className="main-container">
      <h1>Welkom bij Scori2</h1>
      <p>De app voor voetballiefhebbers.</p>
      <div className="button-container">
        <button className="main-btn signup-btn" onClick={handleSignUpClick}>
          Aanmelden
        </button>
        <button className="main-btn login-btn" onClick={handleLoginClick}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default MainContent;
