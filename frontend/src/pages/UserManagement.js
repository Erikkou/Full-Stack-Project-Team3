import React, { useState } from "react";
import { Link } from "react-router-dom";

// hier moeten de users van de db geïmporteerd worden, voor nu dummy data
const initialUsers = [
  { id: 1, name: "Antonio", role: "Admin" },
  { id: 2, name: "Ahmad", role: "EAdmin" },
  { id: 3, name: "Nver", role: "Admin" },
  { id: 4, name: "Erik", role: "Admin" },
  { id: 5, name: "User1", role: "Speler" },
  { id: 6, name: "User2", role: "Speler" },
  { id: 7, name: "User3", role: "Speler" },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [isAdding, setIsAdding] = useState(false);
  const [newUser, setNewUser] = useState({ id: null, name: "", role: "" });

  const [editUser, setEditUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Handler for the "Remove" button
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // Handler for the "Edit" button
  const handleEdit = (user) => {
    setEditUser(user);
    setIsEditing(true);
  };

  // Handler for saving edits
  const handleSaveEdit = () => {
    setUsers(
      users.map((user) =>
        user.id === editUser.id ? editUser : user
      )
    );
    setIsEditing(false);
    setEditUser(null);
  };

  // Handler for canceling the edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditUser(null);
  };

  // Handler for opening the "Add New User" form
  const handleAddNew = () => {
    setIsAdding(true);
  };

  // Handler for saving a new user
  const handleSaveNewUser = () => {
    if (!newUser.name || !newUser.role) {
      alert("All fields are required!");
      return;
    }

    setUsers([...users, { ...newUser, id: Date.now() }]);
    setIsAdding(false);
    setNewUser({ id: null, name: "", role: "" });
  };

  // Handler for canceling the "Add New User" form
  const handleCancelAdd = () => {
    setIsAdding(false);
    setNewUser({ id: null, name: "", role: "" });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        
      </div>

      {/* New User Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold !text-white">Manage Your Users</h2>
        <button
          onClick={handleAddNew}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Add New User
        </button>
      </div>

      {/* User List */}
      {!isAdding && !isEditing && (
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
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-1 px-3 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(user.id)}
                  className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add New User Form */}
      {isAdding && (
        <div className="bg-gray-900 p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4 !text-white">Add New User</h2>
          <label className="block mb-2 text-gray-400">User Name</label>
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />
          <label className="block mb-2 text-gray-400">Role</label>
          <input
            type="text"
            value={newUser.role}
            onChange={(e) =>
              setNewUser({ ...newUser, role: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />
          <div className="flex justify-between">
            <button
              onClick={handleSaveNewUser}
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

      {/* Edit User Form */}
      {isEditing && (
        <div className="bg-gray-900 p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4 !text-white">Edit User</h2>
          <label className="block mb-2 text-gray-400">User Name</label>
          <input
            type="text"
            value={editUser.name}
            onChange={(e) =>
              setEditUser({ ...editUser, name: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />
          <label className="block mb-2 text-gray-400">Role</label>
          <input
            type="text"
            value={editUser.role}
            onChange={(e) =>
              setEditUser({ ...editUser, role: e.target.value })
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

export default UserManagement;
