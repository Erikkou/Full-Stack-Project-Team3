import React, { useState, useEffect } from "react";

const UserStats = () => {
  // State for holding user stats
  const [userStats, setUserStats] = useState({
    totalPoints: 0, // Total points earned
    teamPoints: 0, // Points earned by the team
    predictionAccuracy: 0, 
    totalPredictions: 0, 
    correctPredictions: 0,
    leagueRankings: [], // Array of rankings in different leagues
  });

  // Function to fetch user stats from database
  useEffect(() => {
    // Replace this mock data with call to fetch user stats    <------------------------------------------------------
    // Example API call: fetch('/api/user-stats').then(res => res.json()).then(data => setUserStats(data));
    const mockData = {
      totalPoints: 1500,
      teamPoints: 1200,
      predictionAccuracy: 75,
      totalPredictions: 40,
      correctPredictions: 30,
      leagueRankings: [
        { leagueName: "Public Classic League", rank: 5 },
        { leagueName: "International League", rank: 12 },
        { leagueName: "Head-to-Head League", rank: 8 },
      ],
      milestones: [
        "Scored 200 points in a week",
        "Top 10 in Public Classic League",
        "Predicted 10 matches correctly in a row",
      ],
    };

    // Set mock data as the state
    setUserStats(mockData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">User Stats</h1>

      {/* Overall Points and Team Performance */}
      <div className="bg-gray-700 p-6 rounded shadow-md mb-6">
        <h2 className="text-xl font-bold !text-yellow-400 mb-4">Performance Overview</h2>
        <p className="mb-2">
          <strong>Total Points:</strong> {userStats.totalPoints}
        </p>
        <p className="mb-2">
          <strong>Team Points:</strong> {userStats.teamPoints}
        </p>
      </div>

      {/* Prediction Statistics */}
      <div className="bg-gray-700 p-6 rounded shadow-md mb-6">
        <h2 className="text-xl font-bold !text-yellow-400 mb-4">Prediction Stats</h2>
        <p className="mb-2">
          <strong>Total Predictions:</strong> {userStats.totalPredictions}
        </p>
        <p className="mb-2">
          <strong>Correct Predictions:</strong> {userStats.correctPredictions}
        </p>
        <p className="mb-2">
          <strong>Accuracy:</strong> {userStats.predictionAccuracy}%
        </p>
      </div>

      {/* League Rankings */}
      <div className="bg-gray-700 p-6 rounded shadow-md mb-6">
        <h2 className="text-xl font-bold !text-yellow-400 mb-4">League Rankings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-300 border-collapse">
            <thead>
              <tr>
                <th className="border-b border-gray-500 py-2">League</th>
                <th className="border-b border-gray-500 py-2">Rank</th>
              </tr>
            </thead>
            <tbody>
              {userStats.leagueRankings.map((ranking, index) => (
                <tr key={index} className="hover:bg-gray-600">
                  <td className="py-2">{ranking.leagueName}</td>
                  <td className="py-2">{ranking.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
