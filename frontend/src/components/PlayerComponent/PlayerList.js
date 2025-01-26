import React, {useEffect, useState} from 'react';
import Api from '../../Api';
import Player from './Player';
import AddPlayer from './AddPlayer';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchPlayers = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await Api.get('api/players');
            setPlayers(response.data);
        } catch (error) {
            setError('Error fetching players. Please try again later.');
            console.error('Error fetching players:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPlayers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await Api.delete(`api/players/${id}`);
            setPlayers(players.filter((player) => player.id !== id));
        } catch (error) {
            console.error('Error deleting player:', error);
            setError('Error deleting the player. Please try again.');
        }
    };

    return (
        <div>
            <h1>Player List</h1>
            <AddPlayer onAdd={fetchPlayers}/>
            {loading && <p>Loading players...</p>}
            {error && <p style={{color: 'red'}}>{error}</p>}
            <ul>
                {players.map((player) => (
                    <Player key={player.id} player={player} onDelete={handleDelete}/>
                ))}
            </ul>
        </div>
    );
};

export default PlayerList;
