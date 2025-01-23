import axios from 'axios';
import { useState, useEffect } from 'react';

const LeagueDetailsPopup = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch players data
  const fetchPlayers = async () => {
    try {
      // Retrieve token from localStorage
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('No token found');
      }

      // Make the API request with the token
      const response = await axios.get('http://localhost:9000/api/players', {
        headers: {
          Authorization: `Bearer ${token}`, // Use the token from localStorage
        },
      });

      if (response.status === 200) {
        console.log('Players fetched:', response.data);
        setPlayers(response.data); // Set players in state
      } else {
        throw new Error('Unexpected response status: ' + response.status);
      }
    } catch (error) {
      console.error('Error fetching players:', error.message);
      setError('Failed to fetch players.');
    }
  };

  // Fetch players when the component mounts
  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {players.length > 0 ? (
        <ul>
          {players.map((player) => (
            <li key={player.id}>
              {player.name} - Team ID: {player.team_id}
            </li>
          ))}
        </ul>
      ) : (
        <p>No players available.</p>
      )}
    </div>
  );
};

export default LeagueDetailsPopup;
