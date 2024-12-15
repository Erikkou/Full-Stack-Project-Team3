import React, {useState} from 'react';
import Api from '../../Api';

const AddPlayer = ({onAdd}) => {
    const [playerName, setPlayerName] = useState('');
    const [teamId, setTeamId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Api.post('/players', {playerName, teamId});
            setPlayerName('');
            setTeamId('');
            onAdd();
        } catch (error) {
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
        </form>
    );
};

export default AddPlayer;
