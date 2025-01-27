import React, { useState } from "react";
import TeamDetailsPopup from "./TeamDetailsPopup"; // Import popup component

const UserLeagueManagement = () => {
  const [activeTab, setActiveTab] = useState("show");
  const [generalLeagues, setGeneralLeagues] = useState([
    { id: 1, name: "League name 1", members: 100, lastRank: 200 },
    { id: 2, name: "League name 2", members: 150, lastRank: 300 },
  ]);
  const [selectedLeague, setSelectedLeague] = useState(null); // State for the league to show details
  const [showLeaguePopup, setShowLeaguePopup] = useState(false); // State to control the popup visibility

  // Function to open the league details popup
  const openLeagueDetails = (league) => {
    setSelectedLeague(league);
    setShowLeaguePopup(true);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      <h1 className="text-2xl font-bold mb-6">Leagues & Cups - Team Name</h1>

      {/* Show Leagues Tab */}
      {activeTab === "show" && (
        <div className="p-6 bg-gray-700 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Your Leagues</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-300 border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-gray-500 py-2">League</th>
                  <th className="border-b border-gray-500 py-2">Aantal Members</th>
                  <th className="border-b border-gray-500 py-2">Last Rank</th>
                  <th className="border-b border-gray-500 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {generalLeagues.map((league) => (
                  <tr key={league.id} className="hover:bg-gray-600">
                    <td className="py-2">{league.name}</td>
                    <td className="py-2">{league.members}</td>
                    <td className="py-2">{league.lastRank}</td>
                    <td className="py-2">
                      <span
                        onClick={() => openLeagueDetails(league)}
                        className="text-blue-400 cursor-pointer hover:underline"
                      >
                        View Details
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* League Details Popup */}
      {showLeaguePopup && (
        <TeamDetailsPopup
          league={selectedLeague}
          onClose={() => setShowLeaguePopup(false)} // Close the popup
        />
      )}
    </div>
  );
};

export default UserLeagueManagement;
