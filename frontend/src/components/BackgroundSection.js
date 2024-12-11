// src/components/BackgroundSection.js
import React from 'react';
import '../styles/components/BackgroundSection.css'; // Import specific CSS for this component
import Image from '../image/stadium4.jpg'; // Adjust path to your image

const BackgroundSection = () => {
  return (
    <section
      className="mybg"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white', // Optional: Adjust text color for readability
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1>Welkom bij Scori2</h1>
      <p>De app voor voetballiefhebbers.</p>
    </section>
  );
};

export default BackgroundSection;
