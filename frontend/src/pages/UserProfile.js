import React, { useState, useEffect } from "react";

const UserProfile = () => {
  // **State to store user profile data**
  const [userData, setUserData] = useState({
    name: "User Name",
    email: "user@example.com",
    avatar: "https://via.placeholder.com/150",
    totalPoints: 0,
    leaguesJoined: 0,
  });

  // Effect to fetch user profile from API/DB
  useEffect(() => {
   
    // Example API call: fetchUserProfile()
    // --------------------------------Replace the static data below with API response------------------------------
    const fetchUserData = async () => {
      try {
        // Simulated fetch
        const response = {
          name: "John Doe",
          email: "john.doe@example.com",
          avatar: "https://robohash.org/johndoe",    // User avatar image URL
          totalPoints: 1200,
          leaguesJoined: 5,
        };
        setUserData(response); // Set the fetched user data
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>

      {/* User Profile Card */}
      <div className="p-6 bg-gray-700 rounded shadow-lg max-w-3xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-center mb-6">
          {/* User Avatar */}
          <img
            src={userData.avatar}
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-2 border-yellow-500"
          />
          <div className="ml-6">
            {/* User Name */}
            <h2 className="text-2xl font-bold !text-white">{userData.name}</h2>
            {/* User Email */}
            <p className="text-gray-300">{userData.email}</p>
          </div>
        </div>

        {/* Profile Statistics */}
        <div className="grid grid-cols-2 gap-6">
          {/* Total Points */}
          <div className="p-4 bg-gray-600 rounded text-center">
            <h3 className="text-xl font-bold text-yellow-400">Total Points</h3>
            <p className="text-3xl font-bold">{userData.totalPoints}</p>
          </div>

          {/* Leagues Joined */}
          <div className="p-4 bg-gray-600 rounded text-center">
            <h3 className="text-xl font-bold text-yellow-400">Leagues Joined</h3>
            <p className="text-3xl font-bold">{userData.leaguesJoined}</p>
          </div>
        </div>

        {/* Return to the dashboard Button */}
        <div className="mt-6 text-center">
          <a href="/dashboard">
            <button className="px-6 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400">
                Return to Dashboard
            </button>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
