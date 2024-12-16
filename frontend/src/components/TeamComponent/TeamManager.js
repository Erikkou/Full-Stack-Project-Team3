import React, {useEffect, useState} from 'react';
import Api from '../../Api';

const TeamManager = () => {
    const [teams, setTeams] = useState([]);
    const [newTeamName, setNewTeamName] = useState('');
    const [editTeamId, setEditTeamId] = useState(null);
    const [editTeamName, setEditTeamName] = useState('');


    const fetchTeams = async () => {
        try {
            const response = await Api.get('api/teams');
            setTeams(response.data);
        } catch (error) {
            console.error('Error fetching teams:', error);
        }
    };

    // **Add a new team**
    const handleAddTeam = async () => {
        if (!newTeamName) return;
        try {
            const response = await Api.post('api/teams', {teamName: newTeamName});
            setTeams([...teams, response.data]); // Add the new team to the list
            setNewTeamName(''); // Clear input
        } catch (error) {
            console.error('Error adding team:', error);
        }
    };

    // **Edit a team**
    const handleEditTeam = async () => {
        if (!editTeamName) return;
        try {
            const response = await Api.put(`api/teams/${editTeamId}`, {teamName: editTeamName});
            setTeams(teams.map((team) => (team.id === editTeamId ? response.data : team)));
            setEditTeamId(null); // Clear edit mode
            setEditTeamName(''); // Clear input
        } catch (error) {
            console.error('Error editing team:', error);
        }
    };

    // **Delete a team**
    const handleDeleteTeam = async (id) => {
        try {
            await Api.delete(`/teams/${id}`);
            setTeams(teams.filter((team) => team.id !== id));
        } catch (error) {
            console.error('Error deleting team:', error);
        }
    };


    useEffect(() => {
        fetchTeams().then(r => console.log(r));
    }, []);

    return (
        <div>
            <h1>Team Manager</h1>

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
                                <button onClick={() => setEditTeamId(team.id) || setEditTeamName(team.teamName)}>
                                    Edit
                                </button>
                                <button onClick={() => handleDeleteTeam(team.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TeamManager;
