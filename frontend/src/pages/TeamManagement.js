import React, { useState } from "react";
import { Link } from "react-router-dom";

// hier moeten de teams van de db geïmporteerd worden, voor nu dummy data
const initialTeams = [
  { id: 1, name: "Manchester United", league: "Premier League" },
  { id: 2, name: "Real Madrid", league: "La Liga" },
  { id: 3, name: "Juventus", league: "Serie A" },
  { id: 4, name: "Bayern Munich", league: "Bundesliga" },
];

const TeamManagement = () => {
  const [teams, setTeams] = useState(initialTeams);
  const [isAdding, setIsAdding] = useState(false);
  const [newTeam, setNewTeam] = useState({ id: null, name: "", league: "" });

  const [editTeam, setEditTeam] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Handler for the "Remove" button
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this team?")) {
      setTeams(teams.filter((team) => team.id !== id));
    }
  };

  // Handler for the "Edit" button
  const handleEdit = (team) => {
    setEditTeam(team);
    setIsEditing(true);
  };

  // Handler for saving edits
  const handleSaveEdit = () => {
    setTeams(
      teams.map((team) =>
        team.id === editTeam.id ? editTeam : team
      )
    );
    setIsEditing(false);
    setEditTeam(null);
  };

  // Handler for canceling the edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditTeam(null);
  };

  // Handler for opening the "Add New Team" form
  const handleAddNew = () => {
    setIsAdding(true);
  };

  // Handler for saving a new team
  const handleSaveNewTeam = () => {
    if (!newTeam.name || !newTeam.league) {
      alert("All fields are required!");
      return;
    }

    setTeams([...teams, { ...newTeam, id: Date.now() }]);
    setIsAdding(false);
    setNewTeam({ id: null, name: "", league: "" });
  };

  // Handler for canceling the "Add New Team" form
  const handleCancelAdd = () => {
    setIsAdding(false);
    setNewTeam({ id: null, name: "", league: "" });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Team Management</h1>
        
      </div>

      {/* New Team Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold !text-white">Manage Your Teams</h2>
        <button
          onClick={handleAddNew}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Add New Team
        </button>
      </div>

      {/* Team List */}
      {!isAdding && !isEditing && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{team.name}</h3>
                <p className="text-gray-400">League: {team.league}</p>
              </div>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleEdit(team)}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-1 px-3 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(team.id)}
                  className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add New Team Form */}
      {isAdding && (
        <div className="bg-gray-900 p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4 !text-white">Add New Team</h2>
          <label className="block mb-2 text-gray-400">Team Name</label>
          <input
            type="text"
            value={newTeam.name}
            onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />
          <label className="block mb-2 text-gray-400">League</label>
          <input
            type="text"
            value={newTeam.league}
            onChange={(e) =>
              setNewTeam({ ...newTeam, league: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />
          <div className="flex justify-between">
            <button
              onClick={handleSaveNewTeam}
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
            <button
              onClick={handleCancelAdd}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Edit Team Form */}
      {isEditing && (
        <div className="bg-gray-900 p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4 !text-white">Edit Team</h2>
          <label className="block mb-2 text-gray-400">Team Name</label>
          <input
            type="text"
            value={editTeam.name}
            onChange={(e) =>
              setEditTeam({ ...editTeam, name: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />
          <label className="block mb-2 text-gray-400">League</label>
          <input
            type="text"
            value={editTeam.league}
            onChange={(e) =>
              setEditTeam({ ...editTeam, league: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />
          <div className="flex justify-between">
            <button
              onClick={handleSaveEdit}
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamManagement;
