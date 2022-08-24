/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackish-green' : '#000300',
        'cool-green' : '#00df9a',
      },
    },
  },
  plugins: [],
}
