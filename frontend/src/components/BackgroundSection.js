import React from 'react';
import Image from '../image/stadium4.jpg'; // Verwijst naar de afbeelding

const BackgroundSection = ({ children }) => {
  return (
    <section
      className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      {children}
    </section>
  );
};

export default BackgroundSection;
