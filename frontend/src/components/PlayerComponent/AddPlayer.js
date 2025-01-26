import React, { useState } from 'react';
import Api from '../../Api';

const AddPlayer = ({ onAdd }) => {
    const [playerName, setPlayerName] = useState('');
    const [teamId, setTeamId] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        try {
            await Api.post('api/players', { playerName, teamId });
            setPlayerName('');
            setTeamId('');
            setSuccessMessage('Player added successfully!');
            onAdd();
        } catch (error) {
            setErrorMessage('Error adding player. Please check the details and try again.');
            console.error('Error adding player:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Player Name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Team ID"
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
                required
            />
            <button type="submit">Add Player</button>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
    );
};

export default AddPlayer;
