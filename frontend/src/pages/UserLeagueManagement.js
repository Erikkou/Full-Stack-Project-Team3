import React, { useState } from "react";

const UserLeagueManagement = () => {
  const [activeTab, setActiveTab] = useState("create");

  // Mock data for leagues
  const publicClassicLeagues = [];
  const internationalClassicLeagues = [];
  const publicHeadToHeadLeagues = [];
  const generalLeagues = [
    { id: 1, name: "League name 1", members: 100, lastRank: 200 },
    { id: 2, name: "League name 2", members: 150, lastRank: 300 },
    { id: 3, name: "League name 3", members: 200, lastRank: 400 },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      <h1 className="text-2xl font-bold mb-6">Leagues & Cups - Team Name</h1>
      <div className="flex space-x-4 mb-6">
        {/* Tab buttons */}
        <button
          onClick={() => setActiveTab("create")}
          className={`px-4 py-2 font-bold rounded ${
            activeTab === "create"
              ? "bg-red-600 text-white"
              : "bg-gray-600 text-gray-300 hover:bg-gray-500"
          }`}
        >
          + Create & Join new Leagues
        </button>
        <button
          onClick={() => setActiveTab("show")}
          className={`px-4 py-2 font-bold rounded ${
            activeTab === "show"
              ? "bg-red-600 text-white"
              : "bg-gray-600 text-gray-300 hover:bg-gray-500"
          }`}
        >
          Show your leagues
        </button>
      </div>

      {/* Tab content */}
      {activeTab === "create" && (
        <div className="p-6 bg-gray-700 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Create & Join new Leagues</h2>
          <div>
            {/* Public Classic Leagues */}
            <div className="mb-4">
              <h3 className="font-bold text-yellow-400">Public Classic Leagues</h3>
              {publicClassicLeagues.length === 0 ? (
                <p className="text-gray-300">
                  No public classic leagues joined yet.{" "}
                  <a href="#" className="text-blue-400 underline">
                    Create and join new leagues.
                  </a>
                </p>
              ) : (
                publicClassicLeagues.map((league) => (
                  <p key={league.id}>{league.name}</p>
                ))
              )}
            </div>

            {/* International Classic Leagues */}
            <div className="mb-4">
              <h3 className="font-bold text-yellow-400">International Classic Leagues</h3>
              {internationalClassicLeagues.length === 0 ? (
                <p className="text-gray-300">
                  No international classic leagues joined yet.{" "}
                  <a href="#" className="text-blue-400 underline">
                    Create and join new leagues.
                  </a>
                </p>
              ) : (
                internationalClassicLeagues.map((league) => (
                  <p key={league.id}>{league.name}</p>
                ))
              )}
            </div>

            {/* Public Head-to-Head Leagues */}
            <div className="mb-4">
              <h3 className="font-bold text-yellow-400">Public Head-to-Head Leagues</h3>
              {publicHeadToHeadLeagues.length === 0 ? (
                <p className="text-gray-300">
                  No public head-to-head leagues joined yet.{" "}
                  <a href="#" className="text-blue-400 underline">
                    Create and join new leagues.
                  </a>
                </p>
              ) : (
                publicHeadToHeadLeagues.map((league) => (
                  <p key={league.id}>{league.name}</p>
                ))
              )}
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default UserLeagueManagement;
