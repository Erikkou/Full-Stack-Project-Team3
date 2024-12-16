// src/components/LoginPage.js
import React from 'react';

const LoginPage = ({ handleBackClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="bg-black bg-opacity-50 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-extrabold mb-4 text-center !text-white !text-opacity-85">Inloggen</h2>
        <form>
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
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Inloggen
          </button>
          <button
            type="button"
            className="mt-2 w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleBackClick}
          >
            Terug
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
