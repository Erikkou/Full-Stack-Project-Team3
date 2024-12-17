/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // paden van de React bestanden
    '/node_modules/@headlessui/react/**/*.js',
    './node_modules/@heroicons/react/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


