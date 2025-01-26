import React, { useState, useEffect } from "react";
import Api from "../Api";
import {useParams} from "react-router-dom";

const LeaderboardDetailsPopup = () => {
    const [players, setPlayers] = useState([]);
    const { teamId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLeaderboardData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await Api.get(`api/players/team/${teamId}`);
                setPlayers(response.data);
            } catch (error) {
                console.error("Error fetching leaderboard data:", error);
                setError("Failed to load leaderboard.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchLeaderboardData();
    }, []);

    return (
        <div className="flex-1 bg-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-bold !text-yellow-400 mb-4">Leaderboard</h2>
            {isLoading ? (
                <p className="text-gray-400">Loading leaderboard...</p>
            ) : error ? (
                <p className="text-red-400">{error}</p>
            ) : (
                <ul className="space-y-4">
                    {players.map((player) => (
                        <li key={player.id} className="flex justify-between">
                            <span>{player.name}</span>
                            <span className="text-gray-400">{player.team}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LeaderboardDetailsPopup;
