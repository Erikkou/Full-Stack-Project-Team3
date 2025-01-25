import React from "react";
import { useNavigate } from "react-router-dom";

const GamesOverview = () => {
    const navigate = useNavigate();  // Initialize the useNavigate hook

    const fetchGames = () => {
        // Dummy for backend call
        return [
            { id: 1, name: "Game 1", startDate: "2025-01-01" },
            { id: 2, name: "Game 2", startDate: "2025-02-01" },
            { id: 3, name: "Game 3", startDate: "2025-03-01" },
            { id: 4, name: "Game 4", startDate: "2025-04-01" },
            { id: 5, name: "Game 5", startDate: "2025-01-01" },
            { id: 6, name: "Game 6", startDate: "2025-01-01" },
        ];
    };

    const games = fetchGames();

    return (
        <div className="flex flex-col items-center justify-start bg-transparent py-25">
            <div className="w-full max-w-6xl p-3 rounded-2xl bg-[#000033] shadow-lg mt-24">
                <h1 className="text-3xl font-bold text-white mb-6 text-center">
                    Spelkalender
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className="p-4 border border-gray-200 rounded-lg shadow-md bg-white cursor-pointer transition hover:shadow-lg"
                            onClick={() => navigate(`/game-details/${game.id}`)}>
                            <h3 className="text-sm font-medium text-gray-800 mb-1">BestCoach</h3>
                            <h2 className="text-xl font-semibold text-gray-800">{game.name}</h2>
                            <h3 className="text-gray-800">Startdatum: {new Date(game.startDate).toLocaleDateString()}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GamesOverview;
