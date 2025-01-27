import React, {useEffect, useState} from "react";
import footballFieldImage from "../image/Football_Field.jpg";
import {useNavigate, useParams} from "react-router-dom";
import Api from "../Api";

const UserTeamManagement = () => {
    const [allPlayers, setAllPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {gameId} = useParams();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [playersSelected, setPlayersSelected] = useState([]);
    // const [budget, setBudget] = useState(300);
    const [savedTeams, setSavedTeams] = useState([]);
    const [teamName, setTeamName] = useState("");


    const [currentFormation, setCurrentFormation] = useState("4-3-3");

    const formations = {
        "4-3-3": [
            {id: 1, role: "Goalkeeper", top: "50%", left: "10%"},
            {id: 2, role: "Right Back", top: "20%", left: "30%"},
            {id: 3, role: "Left Back", top: "80%", left: "30%"},
            {id: 4, role: "Center Back 1", top: "38%", left: "25%"},
            {id: 5, role: "Center Back 2", top: "62%", left: "25%"},
            {id: 6, role: "Defensive Midfield", top: "50%", left: "45%"},
            {id: 7, role: "Right Midfield", top: "30%", left: "50%"},
            {id: 8, role: "Left Midfield", top: "70%", left: "50%"},
            {id: 9, role: "Attacking Midfield", top: "50%", left: "70%"},
            {id: 10, role: "Striker", top: "30%", left: "80%"},
            {id: 11, role: "Striker", top: "70%", left: "80%"},
        ],
        "4-4-2": [
            {id: 1, role: "Goalkeeper", top: "50%", left: "10%"},
            {id: 2, role: "Right Back", top: "20%", left: "30%"},
            {id: 3, role: "Left Back", top: "80%", left: "30%"},
            {id: 4, role: "Center Back 1", top: "40%", left: "25%"},
            {id: 5, role: "Center Back 2", top: "60%", left: "25%"},
            {id: 6, role: "Right Midfield", top: "20%", left: "52%"},
            {id: 7, role: "Center Midfield 1", top: "40%", left: "48%"},
            {id: 8, role: "Center Midfield 2", top: "60%", left: "48%"},
            {id: 9, role: "Left Midfield", top: "80%", left: "52%"},
            {id: 10, role: "Striker 1", top: "40%", left: "75%"},
            {id: 11, role: "Striker 2", top: "60%", left: "75%"},
        ],
    };

    useEffect(() => {

        const fetchPlayers = async () => {
            try {
                const response = await Api.get("/api/players");
                setAllPlayers(response.data);
            } catch (error) {
                setError("Failed to load players.");
                console.error("Error fetching players:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPlayers();
    }, []);

    if (isLoading) return <p>Loading players...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    // State variables for managing the team creation process


    // Predefined formations for the teams


    // List of all available players  <--------------------------------------------------------------------get from db
    // const allPlayers = [
    //     {id: 1, name: "Player 1", position: "Goalkeeper", price: 10, goals: 5},
    //     {id: 2, name: "Player 2", position: "Defender", price: 12, goals: 3},
    //     {id: 3, name: "Player 3", position: "Midfielder", price: 15, goals: 7},
    //     {id: 4, name: "Player 4", position: "Striker", price: 20, goals: 12},
    //     {id: 5, name: "Player 5", position: "Goalkeeper", price: 10, goals: 5},
    //     {id: 6, name: "Player 6", position: "Defender", price: 12, goals: 3},
    //     {id: 7, name: "Player 7", position: "Midfielder", price: 15, goals: 7},
    //     {id: 8, name: "Player 8", position: "Striker", price: 20, goals: 12},
    // ];


    const handlePlayerSelect = (player) => {
        const isPlayerSelected = playersSelected.some((p) => p.id === player.id);

        if (isPlayerSelected) {
            setPlayersSelected(playersSelected.filter((p) => p.id !== player.id));
        } else if (playersSelected.length < 11) {
            setPlayersSelected([...playersSelected, player]);
            // setBudget(budget - player.price);
        } else {
            alert("Cannot add more players "); //or insufficient budget
        }
    };

    const handleSaveTeam = async () => {
        if (!teamName.trim()) {
            alert("Please enter a team name before saving.");
            return;
        }

        if (playersSelected.length !== 11) {
            alert("Your squad must contain exactly 11 players.");
            return;
        }

        const newTeam = {
            name: teamName,
            players: playersSelected.map((player) => player.id),
            // remainingBudget: budget,
        };

        try {
            await Api.post("/api/teams", newTeam);
            alert("Team saved successfully!");
            setSavedTeams([...savedTeams, newTeam]);
            setTeamName("");
            setPlayersSelected([]);
            // setBudget(300);
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error saving team:", error);
            alert("Failed to save team. Please try again.");
        }
    };


    const handleDeleteTeam = (index) => {
        const updatedTeams = savedTeams.filter((_, i) => i !== index);
        setSavedTeams(updatedTeams);
    };


    const handleModifyTeam = (index) => {
        const teamToEdit = savedTeams[index];
        setPlayersSelected(teamToEdit.players);
        // setBudget(teamToEdit.remainingBudget);
        setTeamName(teamToEdit.name);
        setIsModalOpen(true);
        handleDeleteTeam(index);
    };

  return (
      <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90 mt-10 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Manage Your Team</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {/* Render saved teams */}
                {savedTeams.map((team, index) => (
                    <div
                        key={index}
                        className="bg-gray-700 p-4 rounded shadow-md border border-gray-500"
                    >
                        <h3 className="text-lg font-bold mb-2">{team.name}</h3>
                        {/*<p className="text-yellow-400 mb-2">Remaining Budget: ${team.remainingBudget}</p>*/}
                        <ul className="text-gray-300 text-sm">
                            {team.players.map((player, idx) => (
                                <li key={idx}>
                                    - {player.name} ({player.position_id})
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-end space-x-2 mt-4">
                            <button
                                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded"
                                onClick={() => handleModifyTeam(index)} // Edit team
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 rounded"
                                onClick={() => handleDeleteTeam(index)} // Delete team
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        {/* Modal for creating or editing teams */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 mt-10">
              <div className="bg-gray-800 text-white rounded-lg shadow-lg w-11/12 max-w-6xl p-6 overflow-y-auto max-h-full">
                <h2 className="text-xl font-bold mb-4 !text-white">Squad Selection</h2>
                <p className="mb-2">
                  Players Selected:{" "}
                  <span className="text-green-400">{playersSelected.length}/15</span>
                </p>
                {/*<p className="mb-6">*/}
                {/*  /!*Budget: <span className="text-yellow-400">${budget}</span>*!/*/}
                {/*</p>*/}

                        <div className="flex flex-wrap md:flex-nowrap mb-6">
                            <div className="w-full md:w-1/2 p-2">
                                <h3 className="text-lg font-bold mb-2">Football Field</h3>
                                <div className="relative bg-gray-700 rounded-lg p-2">
                                    {/* Displaying the football field with player roles */}
                                    <img
                                        src={footballFieldImage}
                                        alt="Football Field"
                                        className="w-full h-auto rounded-lg shadow-md"
                                        style={{maxHeight: "300px", objectFit: "contain"}}
                                    />
                                    <div className="absolute inset-0">
                                        {formations[currentFormation].map((role) => (
                                            <div
                                                key={role.id}
                                                className="absolute bg-blue-700 bg-opacity-75 rounded-full text-xs font-bold text-white flex items-center justify-center shadow-md"
                                                style={{
                                                    top: role.top,
                                                    left: role.left,
                                                    transform: "translate(-50%, -50%)",
                                                    width: "40px",
                                                    height: "40px",
                                                }}
                                            >
                                                {role.role}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Dropdown to select formation */}
                                <select
                                    value={currentFormation}
                                    onChange={(e) => setCurrentFormation(e.target.value)}
                                    className="p-2 rounded bg-gray-600 text-white mb-4"
                                >
                                    <option value="4-3-3">4-3-3</option>
                                    <option value="4-4-2">4-4-2</option>
                                </select>
                            </div>

                            {/* Available Players */}
                            <div className="w-full md:w-1/2 p-2">
                                <h3 className="text-lg font-bold mb-2">Available Players</h3>
                                <div
                                    className="overflow-y-auto h-auto bg-gray-700 p-4 rounded-lg shadow-md"
                                    style={{maxHeight: "315px"}}
                                >
                                    {allPlayers.map((player) => (
                                        <div
                                            key={player.id}
                                            className={`p-4 border rounded shadow-md cursor-pointer ${
                                                playersSelected.includes(player)
                                                    ? "bg-green-600"
                                                    : "bg-gray-600 hover:bg-gray-500"
                                            }`}
                                            onClick={() => handlePlayerSelect(player)}
                                        >
                                            <p className="font-bold">{player.name}</p>
                                            <p>Position: {player.position}</p>
                                            <p>Jersey  Number: {player.jersey_number !== null ? player.jersey_number : "N/A"}</p>
                                            <p>player price: {player.price !== null ? player.price : "N/A"}</p>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Display selected players */}
                        <div
                            className="w-full p-4 bg-gray-700 rounded shadow-md"
                            style={{maxHeight: "100px", overflowY: "auto"}}
                        >
                            <h3 className="text-lg font-bold mb-2">Teamsamenstelling</h3>
                            {playersSelected.length > 0 ? (
                                playersSelected.map((player) => (
                                    <div
                                        key={player.id}
                                        className="flex justify-between items-center border-b border-gray-500 py-2"
                                    >
                                        <p>{player.name}</p>
                                        <button
                                            onClick={() => handlePlayerSelect(player)} // Remove player from squad
                                            className="text-red-500 font-bold"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400">No players selected yet.</p>
                            )}
                        </div>

                        {/* Team name input */}
                        <div className="mt-4">
                            <label htmlFor="team-name" className="block font-bold mb-2">
                                Team Name:
                            </label>
                            <input
                                type="text"
                                id="team-name"
                                className="w-full p-2 rounded bg-gray-600 text-white"
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)} // Update team name
                            />
                        </div>

                        {/* Action buttons */}
                        <div className="flex justify-end mt-6 space-x-4">
                            <button
                                onClick={() => navigate(`/game-details/${gameId}`)}
                                className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveTeam} // Save team and close modal
                                className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
                            >
                                Save Team
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserTeamManagement;
