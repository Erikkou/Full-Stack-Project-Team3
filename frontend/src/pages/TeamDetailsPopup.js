import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TeamDetailsPopup = ({ league }) => {
  const [players, setPlayers] = useState([]); // State for player data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  // API URL ophalen vanuit de .env variabelen
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    // API call om de spelerslijst op te halen
    const fetchPlayers = async () => {
      setIsLoading(true);
      try {
        // Fetch spelers van de API
        const response = await fetch(`${backendUrl}/api/players`);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        setPlayers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching players:", error);
        setError("Failed to load players.");
        setIsLoading(false);
      }
    };

    if (league && league.id) {
      fetchPlayers();
    }
  }, [league, backendUrl]);

  return (
      <div className="flex-1 bg-gray-700 p-6 rounded-lg">
        {/* League title */}
        <h2 className="text-xl font-bold !text-yellow-400 mb-4">{league.name} - Players</h2>

        {/* Loading spinner or error message */}
        {isLoading ? (
            <p className="text-gray-400">Loading players...</p>
        ) : error ? (
            <p className="text-red-400">{error}</p>
        ) : (
            <ul className="space-y-2">
              {/* Show list of players */}
              {players.map((player) => (
                  <li key={player.id} className="flex justify-between items-center">
                    <span>{player.name}</span>
                    <span className="font-bold text-yellow-400">{player.points} pts</span>
                  </li>
              ))}
            </ul>
        )}

        {/* Button to redirect to UserTeamManagement */}
        <div className="mt-6">
          <button
              onClick={() => navigate(`/user-team-management/${league.id}`)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 w-full"
          >
            Manage Your Team
          </button>
        </div>
      </div>
  );
};

export default TeamDetailsPopup;
