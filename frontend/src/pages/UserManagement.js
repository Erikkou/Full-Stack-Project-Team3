import React from "react";
import { Link } from "react-router-dom";

// hier moeten de users van de db geïmporteerd worden, voor nu dummy data
const users = [
  { id: 1, name: "Antonio", role: "Admin" },
  { id: 2, name: "Ahmad", role: "EAdmin" },
  { id: 3, name: "Nver", role: "Admin" },
  { id: 4, name: "Erik", role: "Admin" },
  { id: 5, name: "User1", role: "Speler" },
  { id: 6, name: "User2", role: "Speler" },
  { id: 7, name: "User3", role: "Speler" },
];

const UserManagement = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <Link
          to="/admin"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Back to Dashboard
        </Link>
      </div>

      {/* New User Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold !text-white">Manage Your Users</h2>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Add New User
        </button>
      </div>

      {/* User List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{user.name}</h3>
              <p className="text-gray-400">Role: {user.role}</p>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-1 px-3 rounded">
                Edit
              </button>
              <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 rounded">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
