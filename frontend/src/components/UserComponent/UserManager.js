import React, { useState, useEffect } from 'react';
import Api from '../../Api';

const UserManager = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: '',
        roles: [],
    });

    // **Fetch all users**
    const fetchUsers = async () => {
        try {
            const response = await Api.get('/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // **Handle form changes for new user**
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    // **Add a new user**
    const handleAddUser = async () => {
        if (!newUser.username || !newUser.email || !newUser.password) {
            alert('Please fill in all required fields.');
            return;
        }

        try {
            const response = await Api.post('/api/users', newUser);
            setUsers([...users, response.data]);
            setNewUser({ username: '', email: '', password: '', roles: [] }); // Reset form
            alert('User created successfully!');
        } catch (error) {
            console.error('Error adding user:', error);
            alert('Failed to create user.');
        }
    };

    // **Fetch users on component mount**
    useEffect(() => {
        fetchUsers().then(r => console.log(r));
    }, []);

    return (
        <div>
            <h1>User Management</h1>

            {/* Add User */}
            <div>
                <h2>Add User</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={newUser.username}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="roles"
                    placeholder="Roles (comma-separated)"
                    value={newUser.roles}
                    onChange={(e) =>
                        setNewUser({
                            ...newUser,
                            roles: e.target.value.split(',').map((role) => role.trim()),
                        })
                    }
                />
                <button onClick={handleAddUser}>Add User</button>
            </div>

            {/* User List */}
            <div>
                <h2>Users</h2>
                {users.length === 0 ? (
                    <p>No users found</p>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Roles</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.roles.join(', ')}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default UserManager;
