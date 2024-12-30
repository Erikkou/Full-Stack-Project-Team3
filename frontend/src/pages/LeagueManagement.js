import React, { useState } from "react";
import { Link } from "react-router-dom";

// Dummy leagues data (to be replaced with data from the database)
const initialLeagues = [
  { id: 1, name: "Premier League", country: "England" },
  { id: 2, name: "La Liga", country: "Spain" },
  { id: 3, name: "Serie A", country: "Italy" },
  { id: 4, name: "Bundesliga", country: "Germany" },
];

const LeagueManagement = () => {
  const [leagues, setLeagues] = useState(initialLeagues);
  const [isAdding, setIsAdding] = useState(false);
  const [newLeague, setNewLeague] = useState({ id: null, name: "", country: "" });

  const [editLeague, setEditLeague] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Handler for the "Remove" button
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this league?")) {
      setLeagues(leagues.filter((league) => league.id !== id));
    }
  };

  // Handler for the "Edit" button
  const handleEdit = (league) => {
    setEditLeague(league);
    setIsEditing(true);
  };

  // Handler for saving edits
  const handleSaveEdit = () => {
    setLeagues(
      leagues.map((league) =>
        league.id === editLeague.id ? editLeague : league
      )
    );
    setIsEditing(false);
    setEditLeague(null);
  };

  // Handler for canceling the edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditLeague(null);
  };

  // Handler for opening the "Add New League" form
  const handleAddNew = () => {
    setIsAdding(true);
  };

  // Handler for saving a new league
  const handleSaveNewLeague = () => {
    if (!newLeague.name || !newLeague.country) {
      alert("All fields are required!");
      return;
    }

    setLeagues([...leagues, { ...newLeague, id: Date.now() }]);
    setIsAdding(false);
    setNewLeague({ id: null, name: "", country: "" });
  };

  // Handler for canceling the "Add New League" form
  const handleCancelAdd = () => {
    setIsAdding(false);
    setNewLeague({ id: null, name: "", country: "" });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">League Management</h1>
        
      </div>

      {/* New League Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold !text-white">Manage Your Leagues</h2>
        <button
          onClick={handleAddNew}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Add New League
        </button>
      </div>

      {/* League List */}
      {!isAdding && !isEditing && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leagues.map((league) => (
            <div
              key={league.id}
              className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{league.name}</h3>
                <p className="text-gray-400">Country: {league.country}</p>
              </div>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleEdit(league)}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-1 px-3 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(league.id)}
                  className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add New League Form */}
      {isAdding && (
        <div className="bg-gray-900 p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4">Add New League</h2>
          <label className="block mb-2 text-gray-400">League Name</label>
          <input
            type="text"
            value={newLeague.name}
            onChange={(e) => setNewLeague({ ...newLeague, name: e.target.value })}
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />
          <label className="block mb-2 text-gray-400">Country</label>
          <input
            type="text"
            value={newLeague.country}
            onChange={(e) =>
              setNewLeague({ ...newLeague, country: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />
          <div className="flex justify-between">
            <button
              onClick={handleSaveNewLeague}
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

      {/* Edit League Form */}
      {isEditing && (
        <div className="bg-gray-900 p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4 !text-white">Edit League</h2>
          <label className="block mb-2 text-gray-400">League Name</label>
          <input
            type="text"
            value={editLeague.name}
            onChange={(e) =>
              setEditLeague({ ...editLeague, name: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />
          <label className="block mb-2 text-gray-400">Country</label>
          <input
            type="text"
            value={editLeague.country}
            onChange={(e) =>
              setEditLeague({ ...editLeague, country: e.target.value })
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

export default LeagueManagement;
