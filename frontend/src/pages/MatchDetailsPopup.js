import React from 'react';

const MatchDetailsPopup = () => {
    // Dummy data for matches
    const matches = [
        {
            id: 1,
            name: 'Match 1: Team A vs. Team B',
            date: '2025-01-30',
            time: '18:00',
            location: 'Stadium 1',
        },
        {
            id: 2,
            name: 'Match 2: Team C vs. Team D',
            date: '2025-02-02',
            time: '20:00',
            location: 'Stadium 2',
        },
        {
            id: 3,
            name: 'Match 3: Team E vs. Team F',
            date: '2025-02-05',
            time: '16:00',
            location: 'Stadium 3',
        },
    ];

    return (
        <div className="flex-1 bg-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-bold !text-yellow-400 mb-4">Match Details</h2>
            <ul className="space-y-2">
                {matches.map((match) => (
                    <li
                        key={match.id}
                        className="border-b pb-2 mb-2 last:border-b-0 last:mb-0"
                    >
                        <h3 className="font-semibold text-lg">{match.name}</h3>
                        <p className="text-sm text-gray-600">
                            Date: {match.date} | Time: {match.time}
                        </p>
                        <p className="text-sm">Location: {match.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchDetailsPopup;
