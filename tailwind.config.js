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
      margin: {
        '0.5': '0.5rem',
      },
    },
  },
  plugins: [],
}