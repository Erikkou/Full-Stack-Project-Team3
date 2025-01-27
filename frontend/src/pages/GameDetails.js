import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TeamDetailsPopup from "./TeamDetailsPopup";
import LeaderboardDetailsPopup from "./LeaderboardDetailsPopup";
import MatchDetailsPopup from "./MatchDetailsPopup";

const GameDetails = () => {
    const [game, setGame] = useState(null); // Game data
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [activeTab, setActiveTab] = useState("gameDetails"); // Track active tab

    const { gameId } = useParams();

    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                // Fetch data here (replace with your real API call)
                const dummyGameData = {
                    id: gameId,
                    name: `Game ${gameId}`,
                    description: `This is a description for Game ${gameId}`,
                    league: {
                        name: "League 1",
                        id: 1
                    }
                };

                // Simulate API call delay (remove this in real use)
                setTimeout(() => {
                    setGame(dummyGameData); // Set the dummy game data
                    setIsLoading(false); // Set loading state to false
                }, 1000);
            } catch (error) {
                setError("Failed to fetch game details.");
                setIsLoading(false); // Set loading state to false even on error
            }
        };

        fetchGameDetails();
    }, [gameId]);

    if (isLoading) return <p>Loading game details...</p>;
    if (error) return <p>{error}</p>;

    const handleTabChange = (tab) => {
        setActiveTab(tab); // Set the active tab
    };

    return (
        <div id="game-details-container" className="p-6 text-white">
            <div id="game-header" className="bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h1 className="text-3xl font-bold !text-yellow-400 mb-4">{game.name}</h1>
                <p>{game.description}</p>
            </div>

            {/* Tab Navigation */}
            <div className="tabs-container mb-6">
                <button
                    className={`tab-button ${activeTab === "matchDetails" ? "active" : ""}`}
                    onClick={() => handleTabChange("matchDetails")}
                >
                    Matches
                </button>
                <button
                    className={`tab-button ${activeTab === "leaderboard" ? "active" : ""}`}
                    onClick={() => handleTabChange("leaderboard")}
                >
                    Leaderboard
                </button>
                <button
                    className={`tab-button ${activeTab === "teamDetails" ? "active" : ""}`}
                    onClick={() => handleTabChange("teamDetails")}
                >
                    Team Manager
                </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {activeTab === "matchDetails" && (
                    <div id="match-details" className="bg-gray-700 p-6 rounded-lg shadow-lg">
                        <MatchDetailsPopup gameId={game.id} />
                    </div>
                )}

                {activeTab === "leaderboard" && (
                    <div id="leaderboard-container" className="bg-gray-700 p-6 rounded-lg shadow-lg">
                        <LeaderboardDetailsPopup gameId={game.id} />
                    </div>
                )}

                {activeTab === "teamDetails" && (
                    <div id="team-details-container" className="bg-gray-700 p-6 rounded-lg shadow-lg">
                        <TeamDetailsPopup league={game.league} gameId={game.id} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameDetails;
