/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '9xl': '90rem', // Add this line
      },
      fontFamily: {
        fsalbert: ['FSAlbert', 'sans-serif'], // Define the custom font
      },
      margin: {
        '0.5': '0.5rem',
      },
    },
  },
  plugins: [],
}