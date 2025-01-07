import React, {useState} from 'react';
import Api from '../Api';

const Register = () => {
    const [formData, setFormData] = useState({username: '', email: '', password: ''});
    const [message, setMessage] = useState({text: '', type: ''});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            const response = await Api.post('/api/register', formData);
            setMessage({text: response.data.message, type: 'success'});
            setFormData({username: '', email: '', password: ''});
        } catch (error) {
            setMessage({text: error.response?.data?.message || 'Error occurred during registration.', type: 'error'});
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            {message && (
                <p style={{color: message.type === 'success' ? 'green' : 'red'}}>
                    {message.text}
                </p>

            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default Register;
