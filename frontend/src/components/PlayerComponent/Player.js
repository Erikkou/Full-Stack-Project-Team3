import React from 'react';

const Player = ({ player, onDelete }) => {
    return (
        <li>
            {player.playerName} - {player.team}
            <button onClick={() => onDelete(player.id)}>Delete</button>
        </li>
    );
};

export default Player;
