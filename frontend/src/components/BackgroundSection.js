// src/components/BackgroundSection.js
import React from 'react';
import '../styles/components/BackgroundSection.css'; 
import Image from '../image/stadium4.jpg'; 

const BackgroundSection = ({ handleLoginClick, handleSignUpClick }) => {
  return (
    <section
      className="mybg"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      
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
    </section>
  );
};

export default BackgroundSection;
