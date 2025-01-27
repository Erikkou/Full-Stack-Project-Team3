import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../Api';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Api.post('/api/login', credentials);
            localStorage.setItem('token', response.data.token);
            navigate('/games-overview');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Invalid login credentials.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
