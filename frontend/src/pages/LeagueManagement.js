import React from "react";
import { Link } from "react-router-dom";

// hier moeten de leagues van de db geïmporteerd worden, voor nu dummy data
const leagues = [
  { id: 1, name: "Premier League", country: "England" },
  { id: 2, name: "La Liga", country: "Spain" },
  { id: 3, name: "Serie A", country: "Italy" },
  { id: 4, name: "Bundesliga", country: "Germany" },
];

const LeagueManagement = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">League Management</h1>
        
      </div>

      {/* New League Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold !text-white">Manage Your Leagues</h2>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Add New League
        </button>
      </div>

      {/* League List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leagues.map((league) => (
          <div
            key={league.id}
            className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{league.name}</h3>
              <p className="text-gray-400">Country: {league.country}</p>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-1 px-3 rounded">
                Edit
              </button>
              <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 rounded">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeagueManagement;
