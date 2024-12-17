// src/components/LoginPage.js
import React from 'react';

const LoginPage = ({ handleBackClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="bg-black bg-opacity-50 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-extrabold mb-4 text-center !text-white !text-opacity-85">Inloggen</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder="Voer je username in"
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
          
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
