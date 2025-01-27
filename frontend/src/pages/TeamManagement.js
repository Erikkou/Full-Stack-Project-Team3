import React, { useState, useEffect } from "react";
import Api from "../Api";

const TeamManagement = () => {
  const [teams, setTeams] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newTeam, setNewTeam] = useState({ name: "" });

  const [editTeam, setEditTeam] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Haal de teams op uit de backend
  const fetchTeams = async () => {
    try {
      const response = await Api.get("api/teams");
      setTeams(response.data);
      setErrorMessage(""); // Clear errors
    } catch (error) {
      console.error("Error fetching teams:", error);
      setErrorMessage("Failed to fetch teams. Please try again.");
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  // Verwijder een team
  const handleRemove = async (id) => {
    if (window.confirm("Are you sure you want to remove this team?")) {
      try {
        await Api.delete(`api/teams/${id}`);
        setTeams(teams.filter((team) => team.id !== id));
        setSuccessMessage("Team removed successfully.");
      } catch (error) {
        console.error("Error removing team:", error);
        setErrorMessage("Failed to remove the team. Please try again.");
      }
    }
  };

  // Voeg een nieuw team toe
  const handleSaveNewTeam = async () => {
    if (!newTeam.name.trim()) {
      alert("Team name is required!");
      return;
    }

    try {
      const response = await Api.post("api/teams", { teamName: newTeam.name });
      setTeams([...teams, response.data]);
      setIsAdding(false);
      setNewTeam({ name: "" });
      setSuccessMessage("Team added successfully.");
    } catch (error) {
      console.error("Error adding team:", error);
      setErrorMessage("Failed to add the team. Please try again.");
    }
  };

  // Werk een team bij
  const handleSaveEdit = async () => {
    if (!editTeam.name.trim()) {
      alert("Team name is required!");
      return;
    }

    try {
      const response = await Api.put(`api/teams/${editTeam.id}`, {
        teamName: editTeam.name,
      });
      setTeams(
          teams.map((team) => (team.id === editTeam.id ? response.data : team))
      );
      setIsEditing(false);
      setEditTeam(null);
      setSuccessMessage("Team updated successfully.");
    } catch (error) {
      console.error("Error updating team:", error);
      setErrorMessage("Failed to update the team. Please try again.");
    }
  };

  // Annuleer bewerkingen of toevoegen
  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setNewTeam({ name: "" });
    setEditTeam(null);
  };

  return (
      <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Team Management</h1>
        </div>

        {/* Feedback Messages */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        {/* New Team Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Manage Your Teams</h2>
          <button
              onClick={() => setIsAdding(true)}
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
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <button
                          onClick={() => {
                            setEditTeam(team);
                            setIsEditing(true);
                          }}
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
              <h2 className="text-xl font-bold mb-4">Add New Team</h2>
              <label className="block mb-2 text-gray-400">Team Name</label>
              <input
                  type="text"
                  value={newTeam.name}
                  onChange={(e) => setNewTeam({ name: e.target.value })}
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
                    onClick={handleCancel}
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
              <h2 className="text-xl font-bold mb-4">Edit Team</h2>
              <label className="block mb-2 text-gray-400">Team Name</label>
              <input
                  type="text"
                  value={editTeam.name}
                  onChange={(e) =>
                      setEditTeam({ ...editTeam, name: e.target.value })
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
                    onClick={handleCancel}
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
