import React, { useState } from "react";

const UserLeagueManagement = () => {
  const [activeTab, setActiveTab] = useState("create");  // **State for managing active tab** ("create" or "show")
  const [showPopup, setShowPopup] = useState(false);    // **State for controlling the popup** (whether it's open or closed)
  const [leagueType, setLeagueType] = useState(""); // **State for storing the type of league being created**
  const [newLeagueName, setNewLeagueName] = useState("");    // **State for input field in the popup** (new league name)

  // aan te passen om data uit de API/database op te halen     <--------------------------------------------
  const [generalLeagues, setGeneralLeagues] = useState([
    { id: 1, name: "League name 1", members: 100, lastRank: 200 },
    { id: 2, name: "League name 2", members: 150, lastRank: 300 },
  ]);

 
  const handleCreateLeague = () => {
    if (newLeagueName.trim() !== "") {
      
      
        // object with random members and rank , aan te passen om data naar de API/database te sturen     <--------------------------------------------
      const newLeague = {
        id: generalLeagues.length + 1, // Assign a unique ID
        name: newLeagueName, // Name entered by the user
        members: Math.floor(Math.random() * 100) + 1, 
        lastRank: Math.floor(Math.random() * 500) + 1, 
      };

      
      setGeneralLeagues([...generalLeagues, newLeague]);

      // Close the popup and reset the input field
      setShowPopup(false);
      setNewLeagueName("");
    }
  };

  // **Function to open the popup and set the league type (Public, International, etc.)**
  const openPopup = (type) => {
    setLeagueType(type);
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Leagues & Cups - Team Name</h1>

      {/* Tab buttons to toggle between "Create & Join" and "Show your leagues" */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("create")} // Switch to "create" tab
          className={`px-4 py-2 font-bold rounded ${
            activeTab === "create"
              ? "bg-red-600 text-white" // Active tab style
              : "bg-gray-600 text-gray-300 hover:bg-gray-500" // Inactive tab style
          }`}
        >
           Create & Join new Leagues
        </button>
        <button
          onClick={() => setActiveTab("show")} // Switch to "show" tab
          className={`px-4 py-2 font-bold rounded ${
            activeTab === "show"
              ? "bg-red-600 text-white" // Active tab style
              : "bg-gray-600 text-gray-300 hover:bg-gray-500" // Inactive tab style
          }`}
        >
           Show your leagues
        </button>
      </div>

      {/* Content for "Create & Join new Leagues" tab */}
      {activeTab === "create" && (
        <div className="p-6 bg-gray-700 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4 !text-red-500">Create & Join new Leagues</h2>
          <div>
            {/* Public Classic Leagues Section */}
            <div className="mb-4">
              <h3 className="font-bold text-yellow-400">Public Classic Leagues</h3>
              <p className="text-gray-300">
                No public classic leagues joined yet.{" "}
                {/* Link to open the popup for creating a Public Classic League */}
                <button
                  onClick={() => openPopup("Public Classic League")}
                  className="text-blue-400 underline"
                >
                  Create and join new leagues.
                </button>
              </p>
            </div>

            {/* International Classic Leagues Section */}
            <div className="mb-4">
              <h3 className="font-bold text-yellow-400">International Classic Leagues</h3>
              <p className="text-gray-300">
                No international classic leagues joined yet.{" "}
                {/* Link to open the popup for creating an International Classic League */}
                <button
                  onClick={() => openPopup("International Classic League")}
                  className="text-blue-400 underline"
                >
                  Create and join new leagues.
                </button>
              </p>
            </div>

            {/* Public Head-to-Head Leagues Section */}
            <div className="mb-4">
              <h3 className="font-bold text-yellow-400">Public Head-to-Head Leagues</h3>
              <p className="text-gray-300">
                No public head-to-head leagues joined yet.{" "}
                {/* Link to open the popup for creating a Head-to-Head League */}
                <button
                  onClick={() => openPopup("Public Head-to-Head League")}
                  className="text-blue-400 underline"
                >
                  Create and join new leagues.
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Content for "Show your leagues" tab */}
      {activeTab === "show" && (
        <div className="p-6 bg-gray-700 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Your Leagues</h2>
          {/* Table showing all leagues the user has joined */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-300 border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-gray-500 py-2">League</th>
                  <th className="border-b border-gray-500 py-2">Aantal Members</th>
                  <th className="border-b border-gray-500 py-2">Last Rank</th>
                  <th className="border-b border-gray-500 py-2">Join</th>
                </tr>
              </thead>
              <tbody>
                {generalLeagues.map((league) => (
                  <tr key={league.id} className="hover:bg-gray-600">
                    <td className="py-2">{league.name}</td>
                    <td className="py-2">{league.members}</td>
                    <td className="py-2">{league.lastRank}</td>
                    <td className="py-2 text-blue-400 cursor-pointer hover:underline">
                      Join
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Popup for creating a league */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-700 p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold !text-yellow-400 mb-4">
              Create a {leagueType}
            </h2>
            {/* Input for entering the new league name */}
            <input
              type="text"
              value={newLeagueName}
              onChange={(e) => setNewLeagueName(e.target.value)}
              placeholder="Enter league name"
              className="w-full p-2 rounded bg-gray-600 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {/* Buttons for canceling or creating the league */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowPopup(false)} // Close the popup
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateLeague} // Call the function to create a league
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserLeagueManagement;
