// src/components/BackgroundSection.js
import React from 'react';
import '../styles/components/BackgroundSection.css'; 
import Image from '../image/stadium4.jpg'; 

const BackgroundSection = ({ children }) => {
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
      {children}
    </section>
  );
};

export default BackgroundSection;
