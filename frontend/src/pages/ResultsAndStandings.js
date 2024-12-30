import React from "react";
import { Link } from "react-router-dom";

// hier moeten de resultaten en standen van de db geïmporteerd worden, voor nu dummy data
const results = [
  { id: 1, homeTeam: "Team A", awayTeam: "Team B", score: "2-1" },
  { id: 2, homeTeam: "Team C", awayTeam: "Team D", score: "1-3" },
  { id: 3, homeTeam: "Team E", awayTeam: "Team F", score: "0-0" },
  { id: 4, homeTeam: "Team G", awayTeam: "Team H", score: "4-2" },
];

const standings = [
  { id: 1, team: "Team A", points: 15 },
  { id: 2, team: "Team D", points: 12 },
  { id: 3, team: "Team G", points: 10 },
  { id: 4, team: "Team B", points: 8 },
];

const ResultsAndStandings = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Results and Standings</h1>
        
      </div>

      {/* Results Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold !text-white">Recent Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {results.map((result) => (
            <div
              key={result.id}
              className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {result.homeTeam} vs {result.awayTeam}
                </h3>
                <p className="text-gray-400">Score: {result.score}</p>
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

      {/* Standings Section */}
      <div>
        <h2 className="text-lg font-semibold !text-white">Current Standings</h2>
        <div className="bg-gray-900 p-4 rounded-lg shadow-md mt-4">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-700">#</th>
                <th className="py-2 px-4 border-b border-gray-700">Team</th>
                <th className="py-2 px-4 border-b border-gray-700">Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((standing, index) => (
                <tr key={standing.id} className="hover:bg-gray-700">
                  <td className="py-2 px-4 border-b border-gray-700">{index + 1}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{standing.team}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{standing.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultsAndStandings;
