import React, { useEffect, useState } from 'react';
import Api from '../../Api';
import { useNavigate } from "react-router-dom";

const TeamManager = () => {
    const [teams, setTeams] = useState([]);
    const [newTeamName, setNewTeamName] = useState('');
    const [editTeamId, setEditTeamId] = useState(null);
    const [editTeamName, setEditTeamName] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Fetch Teams
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await Api.get('/api/teams');
                if (Array.isArray(response.data)) {
                    setTeams(response.data);
                } else {
                    console.error('Expected an array, but got:', response.data);
                    setTeams([]);
                }
            } catch (error) {
                console.error('Error fetching teams:', error);
            }
        };
        fetchTeams();
    }, navigate);


    // Add a New Team
    const handleAddTeam = async () => {
        if (newTeamName.trim().length === 0) {
            alert('Team name cannot be empty');
            return;
        }
        try {
            const response = await Api.post('/api/teams', { teamName: newTeamName });
            setTeams([...teams, response.data]);
            setNewTeamName('');
        } catch (error) {
            console.error('Error adding team:', error);
            setErrorMessage('Failed to add team. Please try again.');
        }
    };

    // Edit a Team
    const handleEditTeam = async () => {
        if (editTeamName.trim().length === 0) {
            alert('Team name cannot be empty');
            return;
        }
        try {
            const response = await Api.put(`/api/teams/${editTeamId}`, { teamName: editTeamName });
            setTeams(teams.map((team) => (team.id === editTeamId ? response.data : team)));
            setEditTeamId(null);
            setEditTeamName('');
        } catch (error) {
            console.error('Error editing team:', error);
            setErrorMessage('Failed to edit team. Please try again.');
        }
    };

    // Delete a Team
    const handleDeleteTeam = async (id) => {
        try {
            await Api.delete(`/api/teams/${id}`);
            setTeams(teams.filter((team) => team.id !== id));
        } catch (error) {
            console.error('Error deleting team:', error);
            setErrorMessage('Failed to delete team. Please try again.');
        }
    };

    // Handle Edit Button Click
    const handleEditClick = (team) => {
        setEditTeamId(team.id);
        setEditTeamName(team.teamName);
    };

    return (
        <div>
            <h1>Team Manager</h1>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {/* Add Team */}
                    <div>
                        <h2>Add Team</h2>
                        <input
                            type="text"
                            placeholder="Enter team name"
                            value={newTeamName}
                            onChange={(e) => setNewTeamName(e.target.value)}
                        />
                        <button onClick={handleAddTeam}>Add Team</button>
                    </div>

                    {/* Edit Team */}
                    {editTeamId && (
                        <div>
                            <h2>Edit Team</h2>
                            <input
                                type="text"
                                placeholder="Edit team name"
                                value={editTeamName}
                                onChange={(e) => setEditTeamName(e.target.value)}
                            />
                            <button onClick={handleEditTeam}>Save Changes</button>
                            <button onClick={() => setEditTeamId(null)}>Cancel</button>
                        </div>
                    )}

                    {/* Team List */}
                    <div>
                        <h2>Teams</h2>
                        {teams.length === 0 ? (
                            <p>No teams available</p>
                        ) : (
                            <ul>
                                {teams.map((team) => (
                                    <li key={team.id}>
                                        <strong>{team.teamName}</strong>
                                        <button onClick={() => handleEditClick(team)}>Edit</button>
                                        <button onClick={() => handleDeleteTeam(team.id)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default TeamManager;
