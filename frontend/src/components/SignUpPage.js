import React from 'react';

const SignUpPage = ({ handleBackClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      {/* Achtergrond overlay */}
      <div className="bg-black bg-opacity-50 p-8 rounded-xl shadow-lg w-96">
        {/* Titel sectie */}
        <h2 className="text-3xl font-extrabold mb-4 text-center !text-white !text-opacity-85">
          Aanmelden
        </h2>
        
        {/* Formulier sectie */}
        <form>
          {/* Naam veld */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Naam
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder="Voer je naam in"
            />
          </div>

          {/* E-mailadres veld */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              E-mailadres
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder="Voer je e-mailadres in"
            />
          </div>
          
          {/* Wachtwoord veld */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Wachtwoord
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder="Voer je wachtwoord in"
            />
          </div>
          
          {/* Aanmelden knop */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Aanmelden
          </button>
          
          
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
