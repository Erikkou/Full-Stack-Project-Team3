import React, { useState } from "react";
import footballFieldImage from "../image/Football_Field.jpg";

const UserTeamManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playersSelected, setPlayersSelected] = useState([]);
  const [budget, setBudget] = useState(100);
  const [savedTeams, setSavedTeams] = useState([]); // Opslag voor teams
  const [teamName, setTeamName] = useState(""); // Teamnaam state

  // Dummy data voor rollen en spelers
  const roles = [
    { id: 1, role: "Goalkeeper" },
    { id: 2, role: "Right Back" },
    { id: 3, role: "Left Back" },
    { id: 4, role: "Center Back 1" },
    { id: 5, role: "Center Back 2" },
    { id: 6, role: "Defensive Midfield" },
    { id: 7, role: "Right Midfield" },
    { id: 8, role: "Left Midfield" },
    { id: 9, role: "Attacking Midfield" },
    { id: 10, role: "Right Wing" },
    { id: 11, role: "Striker" },
  ];

  const allPlayers = [
    { id: 1, name: "Player 1", position: "Goalkeeper", price: 10, goals: 5 },
    { id: 2, name: "Player 2", position: "Defender", price: 12, goals: 3 },
    { id: 3, name: "Player 3", position: "Midfielder", price: 15, goals: 7 },
    { id: 4, name: "Player 4", position: "Striker", price: 20, goals: 12 },
    { id: 5, name: "Player 5", position: "Goalkeeper", price: 10, goals: 5 },
    { id: 6, name: "Player 6", position: "Defender", price: 12, goals: 3 },
    { id: 7, name: "Player 7", position: "Midfielder", price: 15, goals: 7 },
    { id: 8, name: "Player 8", position: "Striker", price: 20, goals: 12 },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePlayerSelect = (player) => {
    if (playersSelected.includes(player)) {
      setPlayersSelected(playersSelected.filter((p) => p !== player));
      setBudget(budget + player.price);
    } else if (playersSelected.length < 15 && budget >= player.price) {
      setPlayersSelected([...playersSelected, player]);
      setBudget(budget - player.price);
    }
  };

  const handleSaveTeam = () => {
    if (!teamName.trim()) {
      alert("Please enter a team name before saving.");
      return;
    }

    const newTeam = {
      name: teamName,
      players: playersSelected,
      remainingBudget: budget,
    };

    setSavedTeams([...savedTeams, newTeam]); // Voeg het nieuwe team toe aan opgeslagen teams
    setTeamName(""); // Reset de teamnaam
    setPlayersSelected([]); // Reset geselecteerde spelers
    setBudget(100); // Reset budget
    setIsModalOpen(false); // Sluit de modal
  };

  const handleDeleteTeam = (index) => {
    const updatedTeams = savedTeams.filter((_, i) => i !== index);
    setSavedTeams(updatedTeams);
  };

  const handleModifyTeam = (index) => {
    const teamToEdit = savedTeams[index];
    setPlayersSelected(teamToEdit.players);
    setBudget(teamToEdit.remainingBudget);
    setTeamName(teamToEdit.name);
    setIsModalOpen(true);
    handleDeleteTeam(index);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Manage Your Team</h1>
      <button
        onClick={toggleModal}
        className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mb-6"
      >
        Create Team
      </button>

      {/* Saved Teams Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {savedTeams.map((team, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded shadow-md border border-gray-500"
          >
            <h3 className="text-lg font-bold mb-2">{team.name}</h3>
            <p className="text-yellow-400 mb-2">Remaining Budget: ${team.remainingBudget}</p>
            <h4 className="text-sm font-bold mb-2">Players:</h4>
            <ul className="text-gray-300 text-sm">
              {team.players.map((player, idx) => (
                <li key={idx}>
                  - {player.name} ({player.position})
                </li>
              ))}
            </ul>

            {/* Edit en Delete knoppen */}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded"
                onClick={() => handleModifyTeam(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 rounded"
                onClick={() => handleDeleteTeam(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white rounded-lg shadow-lg w-11/12 max-w-6xl p-6">
            <h2 className="text-xl font-bold mb-4">Squad Selection</h2>
            <p className="mb-2">
              Players Selected:{" "}
              <span className="text-green-400">{playersSelected.length}/15</span>
            </p>
            <p className="mb-6">
              Budget: <span className="text-yellow-400">${budget}</span>
            </p>

            <div className="flex flex-wrap md:flex-nowrap mb-6">
              <div className="w-full md:w-1/2 p-2">
                <h3 className="text-lg font-bold mb-2">Football Field</h3>
                <div className="relative bg-gray-700 rounded-lg p-2">
                  <img
                    src={footballFieldImage}
                    alt="Football Field"
                    className="w-full h-auto rounded-lg shadow-md"
                    style={{ maxHeight: "400px", objectFit: "contain" }}
                  />
                  <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4">
                    {roles.map((role) => (
                      <div
                        key={role.id}
                        className="flex items-center justify-center bg-blue-700 bg-opacity-75 rounded shadow-md text-xs text-center font-bold text-white"
                      >
                        {role.role}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-2">
                <h3 className="text-lg font-bold mb-2">Available Players</h3>
                <div
                  className="overflow-y-auto h-auto bg-gray-700 p-4 rounded-lg shadow-md"
                  style={{ maxHeight: "360px" }}
                >
                  <div className="grid grid-cols-1 gap-4">
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
                        <p>Price: ${player.price}</p>
                        <p>Goals: {player.goals}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-full p-4 bg-gray-700 rounded shadow-md"
              style={{ maxHeight: "100px", overflowY: "auto" }}
            >
              <h3 className="text-lg font-bold mb-2">My Squad</h3>
              {playersSelected.length > 0 ? (
                playersSelected.map((player) => (
                  <div
                    key={player.id}
                    className="flex justify-between items-center border-b border-gray-500 py-2"
                  >
                    <p>{player.name}</p>
                    <button
                      onClick={() => handlePlayerSelect(player)}
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

            <div className="mt-4">
              <label htmlFor="team-name" className="block font-bold mb-2">
                Team Name:
              </label>
              <input
                type="text"
                id="team-name"
                className="w-full p-2 rounded bg-gray-600 text-white"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>

            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={toggleModal}
                className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveTeam}
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
