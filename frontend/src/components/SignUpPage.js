import React, { useState } from "react";
import Api from "../Api";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const SignupPage = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await Api.post("/api/register", formData);
      setMessage({ text: response.data.message, type: "success" });
      setFormData({ username: "", email: "", password: "" });
      login("user");
    } catch (error) {
      setMessage({ text: error.response?.data?.message || "Error occurred during registration.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="flex flex-col items-center justify-center h-full text-white">
        <div className="bg-black bg-opacity-50 p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-3xl font-bold text-center mb-6 !text-white opacity-85">Aanmelden</h2>
          {message.text && (
              <p
                  className={`text-center mb-4 ${
                      message.type === "success" ? "text-green-500" : "text-red-500"
                  }`}
              >
                {message.text}
              </p>
          )}
          <div className="space-y-4">
            <input
                type="text"
                name="username"
                placeholder="Naam"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                name="password"
                placeholder="Wachtwoord"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
              onClick={handleSignUp}
              disabled={loading}
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            {loading ? "Bezig met aanmelden..." : "Aanmelden"}
          </button>
          <p className="mt-4 text-sm text-center">
            Al een account?{" "}
            <a href="/login" className="text-blue-400 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
  );
};

export default SignupPage;
