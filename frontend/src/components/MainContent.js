import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
  const navigate = useNavigate();

  // Functies voor navigatie
  const handleSignUpClick = () => {
    navigate('/signup'); // Navigeren naar de signup pagina
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigeren naar de login pagina
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-4xl font-extrabold text-white">Welkom bij Scori2</h1>
      <p className="text-lg font-semibold text-white opacity-90">De app voor voetballiefhebbers.</p>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleSignUpClick}
        >
          Aanmelden
        </button>
        <button
          className="bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
          onClick={handleLoginClick}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default MainContent;
