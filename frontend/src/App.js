import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import TeamManager from './components/TeamComponent/TeamManager';
import Api from './Api';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await Api.get('/api/me');
                    setIsAuthenticated(true);
                    setUsername(response.data.username);
                } catch (error) {
                    console.error('Token is invalid or expired:', error);
                    localStorage.removeItem('token');
                    setIsAuthenticated(false);
                }
            }
            setIsLoading(false);
        };
        validateToken().then(r => console.log(r));
    }, []);

    const handleLogin = (user) => {
        setIsAuthenticated(true);
        setUsername(user.username);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUsername('');
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <Navbar isAuthenticated={isAuthenticated} username={username}/>
            <Routes>
                <Route
                    path="/teams"
                    element={
                        isAuthenticated ? (
                            <TeamManager/>
                        ) : (
                            <Navigate to="/login"/>
                        )
                    }/>
                <Route path="/" element={<Home/>}/>
                <Route
                    path="/login"
                    element={
                        isAuthenticated ? <Navigate to="/profile"/> : <Login onLogin={handleLogin}/>
                    }
                />
                <Route path="/register" element={<Register/>}/>
                <Route
                    path="/profile"
                    element={
                        isAuthenticated ? (
                            <Profile username={username}/>
                        ) : (
                            <Navigate to="/login"/>
                        )
                    }
                />
                <Route
                    path="/logout"
                    element={
                        <button onClick={handleLogout}>Logout</button>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
