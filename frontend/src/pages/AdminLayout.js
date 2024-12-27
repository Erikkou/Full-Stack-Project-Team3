import React from "react";
import { lineChartData, pieChartData, pieChartData2 } from '../data/dashboardData';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

// Import the image
import avatarImage from '../image/avatar.png';
import { Link } from "react-router-dom";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-800 left-0 right-0 w-full opacity-90">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white fixed top-0 bottom-0 left-0 h-full">
        <div className="p-4 font-bold text-center">Admin Dashboard</div>
        <nav className="mt-4">
          {/* Avatar Section */}
          <div className="flex items-center justify-center mb-6 mt-10 mb-2rem">
            <img src={avatarImage} alt="User Avatar" className="w-20 h-20 rounded-full object-cover" />
          </div>

          <ul className="flex flex-col space-y-2">
            <li className="px-4 py-2 hover:bg-gray-700 rounded">
              <a href="/admin/competitions">Competities</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded">
              <a href="/admin/settings">Instellingen</a>
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
            <Link to="/admin/league-management">
              <h2 className="text-xl font-semibold mb-4 !text-white">
               League Management
              </h2>
            </Link>

            </div>
            <div className="bg-red-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center opacity-90 hover:bg-red-600 transition transform hover:-translate-y-2">
              <h2 className="text-xl font-semibold mb-4 !text-white">
                Team Management
              </h2>
            </div>
            <div className="bg-green-600 p-6 rounded-lg shadow-md flex flex-col items-center justify-center opacity-90 hover:bg-green-400 transition transform hover:-translate-y-2">
              <h2 className="text-xl font-semibold mb-4 !text-white">
                User Management
              </h2>
            </div>
            <div className="bg-purple-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center opacity-90 hover:bg-purple-600 transition transform hover:-translate-y-2">
              <h2 className="text-xl font-semibold mb-4 !text-white">
                Match Scheduling
              </h2>
            </div>
            <div className="bg-orange-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center opacity-90 hover:bg-orange-500 transition transform hover:-translate-y-2">
              <h2 className="text-xl font-semibold mb-4 !text-white">
                Results and Standings
              </h2>
            </div>
            <div className="bg-yellow-600 p-6 rounded-lg shadow-md flex flex-col items-center justify-center opacity-90 hover:bg-yellow-400 transition transform hover:-translate-y-2">
              <h2 className="text-xl font-semibold mb-4 !text-white">Blogs</h2>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Line Chart */}
          <div className="bg-gray-900 p-6 shadow-md rounded-lg opacity-90">
            <h2 className="text-xl font-bold mb-4 !text-white opacity-90">User & Team Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={lineChartData}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="Users" stroke="#8884d8" />
                <Line type="monotone" dataKey="Teams" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Charts */}
          <div className="bg-gray-900 p-6 shadow-md rounded-lg opacity-90">
            <h2 className="text-xl font-bold mb-4 !text-white opacity-90">User & Sport Distribution</h2>
            <div className="flex flex-wrap justify-around">
              {/* Pie Chart 1 */}
              <ResponsiveContainer width="45%" height={200}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius="60%"
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>

              {/* Pie Chart 2 */}
              <ResponsiveContainer width="45%" height={200}>
                <PieChart>
                  <Pie
                    data={pieChartData2}
                    cx="50%"
                    cy="50%"
                    outerRadius="60%"
                    fill="#82ca9d"
                    dataKey="value"
                    label
                  >
                    {pieChartData2.map((entry, index) => (
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
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
