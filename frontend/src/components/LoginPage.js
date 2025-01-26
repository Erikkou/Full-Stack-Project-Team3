import React, {useContext, useState} from "react";
import {AuthContext} from "../AuthContext";
import {useNavigate} from "react-router-dom";
import Api from "../Api";

const LoginPage = () => {
    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await Api.post("/api/login", {username: username, password});
            const {token, role} = response.data;
            login(role, token);
            navigate("/");
        } catch (error) {
            setMessage(error.response?.data?.message || "Invalid login credentials.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full text-white">
            <div className="bg-black bg-opacity-50 p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-3xl font-bold text-center mb-6 !text-white opacity-85">Log in</h2>
                {message && <p className="text-red-500 text-center mb-4">{message}</p>}
                <div className="space-y-4">
                    <input
                        type="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Wachtwoord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    onClick={handleLogin}
                    className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                    Log in
                </button>
                <p className="mt-4 text-sm text-center">
                    Nog geen account?{" "}
                    <a href="/signup" className="text-blue-400 hover:underline">
                        Aanmelden
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
