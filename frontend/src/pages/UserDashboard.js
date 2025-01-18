import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

// Import the image
import avatarImage from '../image/avatar.png';
import { Link } from "react-router-dom";

// Dummy data for user-specific charts
const userActivityData = [
  { name: "Week 1", Matches: 3, Wins: 2 },
  { name: "Week 2", Matches: 4, Wins: 1 },
  { name: "Week 3", Matches: 2, Wins: 2 },
  { name: "Week 4", Matches: 5, Wins: 3 },
];

const favoriteSportsData = [
  { name: "Soccer", value: 40 },
  { name: "Basketball", value: 30 },
  { name: "Tennis", value: 20 },
  { name: "Other", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const UserDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-800 left-0 right-0 w-full opacity-90">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white fixed top-0 bottom-0 left-0 h-full">
        <div className="p-4 font-bold text-center">User Dashboard</div>
        <nav className="mt-4">
          {/* Avatar Section */}
          <div className="flex items-center justify-center mb-6 mt-10 mb-2rem">
            <img src={avatarImage} alt="User Avatar" className="w-20 h-20 rounded-full object-cover" />
          </div>

          <ul className="flex flex-col space-y-2">
            <li className="px-4 py-2 hover:bg-gray-700 rounded">
              <Link to="/user/profile">My Profile</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded">
              <Link to="/user/matches">My Matches</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 bg-transparent overflow-y-auto min-h-screen w-full">
        <div className="bg-transparent p-6 rounded-lg shadow-md mb-6 mt-24">
          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards */}
            <div className="bg-blue-600 p-6 rounded-lg shadow-md flex flex-col items-center justify-center opacity-90 hover:bg-blue-400 transition transform hover:-translate-y-2">
              <Link to="/user-league-management">
                <h2 className="text-xl font-semibold mb-4 !text-white">Leagues</h2>
              </Link>
            </div>

            <div className="bg-red-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center opacity-90 hover:bg-red-600 transition transform hover:-translate-y-2">
              <Link to="/user-team-management">
                <h2 className="text-xl font-semibold mb-4 !text-white">Teams</h2>
              </Link>
            </div>

            <div className="bg-green-600 p-6 rounded-lg shadow-md flex flex-col items-center justify-center opacity-90 hover:bg-green-400 transition transform hover:-translate-y-2">
              <Link to="/user/stats">
                <h2 className="text-xl font-semibold mb-4 !text-white">My Stats</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Line Chart */}
          <div className="bg-gray-900 p-6 shadow-md rounded-lg opacity-90">
            <h2 className="text-xl font-bold mb-4 !text-white opacity-90">Activity Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={userActivityData}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="Matches" stroke="#8884d8" />
                <Line type="monotone" dataKey="Wins" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-gray-900 p-6 shadow-md rounded-lg opacity-90">
            <h2 className="text-xl font-bold mb-4 !text-white opacity-90">Favorite Sports</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={favoriteSportsData}
                  cx="50%"
                  cy="50%"
                  outerRadius="60%"
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {favoriteSportsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
