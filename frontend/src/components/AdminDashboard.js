// // src/components/AdminDashboard.js
// import React, { useState } from 'react';

// const AdminDashboard = () => {
//   const [competitionName, setCompetitionName] = useState('');
//   const [sportType, setSportType] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [maxParticipants, setMaxParticipants] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Competition Created:', {
//       competitionName,
//       sportType,
//       startDate,
//       endDate,
//       maxParticipants,
//     });
//   };

//   return (
//     <div className="admin-dashboard bg-black bg-opacity-50 p-8 rounded-xl shadow-lg w-96 mx-auto mt-12 text-white">
//       <h2 className="text-3xl font-extrabold mb-4 text-center">Beheerder Dashboard</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="competitionName" className="block text-sm font-medium mb-1">
//             Competitie Naam
//           </label>
//           <input
//             type="text"
//             id="competitionName"
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//             placeholder="Naam van de competitie"
//             value={competitionName}
//             onChange={(e) => setCompetitionName(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="sportType" className="block text-sm font-medium mb-1">
//             Sporttype
//           </label>
//           <input
//             type="text"
//             id="sportType"
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//             placeholder="Voer het sporttype in"
//             value={sportType}
//             onChange={(e) => setSportType(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="startDate" className="block text-sm font-medium mb-1">
//             Startdatum
//           </label>
//           <input
//             type="date"
//             id="startDate"
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="endDate" className="block text-sm font-medium mb-1">
//             Einddatum
//           </label>
//           <input
//             type="date"
//             id="endDate"
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="maxParticipants" className="block text-sm font-medium mb-1">
//             Maximaal aantal deelnemers
//           </label>
//           <input
//             type="number"
//             id="maxParticipants"
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//             placeholder="Maximaal aantal deelnemers"
//             value={maxParticipants}
//             onChange={(e) => setMaxParticipants(e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Opslaan
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminDashboard;
