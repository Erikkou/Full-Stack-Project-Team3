// LeaderboardDetailsPopup.js
import React, { useState, useEffect } from "react";

const LeaderboardDetailsPopup = () => {
    const [players, setPlayers] = useState([]); // State for player data
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        // Fetch leaderboard data (placeholder for now)
        const fetchLeaderboardData = async () => {
            setIsLoading(true);
            try {
                // For now, simulate data fetch
                const dummyLeaderboard = [
                    { name: "Player 1", points: 120 },
                    { name: "Player 2", points: 115 },
                    { name: "Player 3", points: 110 },
                ];
                setPlayers(dummyLeaderboard);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching leaderboard data:", error);
                setError("Failed to load leaderboard.");
                setIsLoading(false);
            }
        };

        fetchLeaderboardData();
    }, []);

    return (
        <div className="flex-1 bg-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-bold !text-yellow-400 mb-4">Leaderboard</h2>
            {/* Loading spinner or error message */}
            {isLoading ? (
                <p className="text-gray-400">Loading leaderboard...</p>
            ) : error ? (
                <p className="text-red-400">{error}</p>
            ) : (
                <ul className="space-y-4">
                    {/* Show list of players */}
                    {players.map((player, index) => (
                        <li key={index} className="flex justify-between">
                            <span>{player.name}</span>
                            <span className="font-bold text-yellow-400">{player.points} pts</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LeaderboardDetailsPopup;
