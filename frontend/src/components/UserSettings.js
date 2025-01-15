import React, { useState } from "react";
import avatarImage from "../image/avatar.png";

const UserSettings = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: avatarImage,
  });

  const [preferences, setPreferences] = useState({
    language: "English",
    notifications: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setPreferences((prev) => ({ ...prev, [name]: checked }));
    } else {
      setUserInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    alert("Instellingen opgeslagen!");
    // Hier komt de API-call voor het opslaan van gegevens.  <---------------------------------------------------------
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 w-full opacity-90">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gebruikersinstellingen</h1>
      </div>

      {/* Profielgegevens */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 !text-white">Profielgegevens</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Naam</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-800 rounded border border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-800 rounded border border-gray-600"
            />
          </div>
        </div>
      </div>

      

      {/* Opslaan knop */}
      <button
        onClick={handleSave}
        className="bg-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition"
      >
        Opslaan
      </button>
    </div>
  );
};

export default UserSettings;
