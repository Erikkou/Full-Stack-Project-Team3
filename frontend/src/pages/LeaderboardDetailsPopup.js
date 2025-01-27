import React, { useState, useEffect } from "react";
import Api from "../Api";
import { useParams } from "react-router-dom";

const LeaderboardDetailsPopup = () => {
    const [players, setPlayers] = useState([]);
    const { teamId } = useParams(); // Retrieve the team ID from the URL
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLeaderboardData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                console.log("Fetching players for teamId:", teamId); // Debug log
                const response = await Api.get(`/api/players/team/${teamId}`);
                console.log("Fetched players:", response.data); // Debug log
                setPlayers(response.data);
            } catch (error) {
                console.error("Error fetching leaderboard data:", error);
                setError("Failed to load leaderboard.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchLeaderboardData();
    }, [teamId]); // Re-fetch data if teamId changes

    return (
        <div className="flex-1 bg-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">Leaderboard</h2>
            {isLoading ? (
                <p className="text-gray-400">Loading leaderboard...</p>
            ) : error ? (
                <p className="text-red-400">{error}</p>
            ) : players.length > 0 ? (
                <ul className="space-y-4">
                    {players.map((player) => (
                        <li
                            key={player.id}
                            className="flex justify-between bg-gray-800 p-4 rounded-lg shadow-md"
                        >
                            <div>
                                <p className="font-bold text-white">{player.name}</p>
                                <p className="text-gray-400">Jersey Number: {player.jersey_number || "N/A"}</p>
                            </div>
                            <p className="text-yellow-400">{player.team}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-400">No players found for this team.</p>
            )}
        </div>
    );
};

export default LeaderboardDetailsPopup;
