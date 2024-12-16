import React, { useEffect, useState } from 'react';
import Api from '../../Api';
import Player from './Player';
import AddPlayer from './AddPlayer';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);

    const fetchPlayers = async () => {
        try {
            const response = await Api.get('api/players');
            setPlayers(response.data);
        } catch (error) {
            console.error('Error fetching players:', error);
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
        }
    };

    return (
        <div>
            <h1>Player List</h1>
            <AddPlayer onAdd={fetchPlayers} />
            <ul>
                {players.map((player) => (
                    <Player key={player.id} player={player} onDelete={handleDelete} />
                ))}
            </ul>
        </div>
    );
};

export default PlayerList;
