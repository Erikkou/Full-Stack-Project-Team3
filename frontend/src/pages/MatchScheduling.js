import React from "react";
import { Link } from "react-router-dom";

// hier moeten de matches van de db geïmporteerd worden, voor nu dummy data
const matches = [
  { id: 1, homeTeam: "Team A", awayTeam: "Team B", date: "2023-12-15" },
  { id: 2, homeTeam: "Team C", awayTeam: "Team D", date: "2023-12-18" },
  { id: 3, homeTeam: "Team E", awayTeam: "Team F", date: "2023-12-22" },
  { id: 4, homeTeam: "Team G", awayTeam: "Team H", date: "2023-12-25" },
];

const MatchScheduling = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Match Scheduling</h1>
        <Link
          to="/admin"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Back to Dashboard
        </Link>
      </div>

      {/* New Match Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold !text-white">Schedule Your Matches</h2>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Add New Match
        </button>
      </div>

      {/* Match List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">
                {match.homeTeam} vs {match.awayTeam}
              </h3>
              <p className="text-gray-400">Date: {match.date}</p>
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

export default MatchScheduling;
