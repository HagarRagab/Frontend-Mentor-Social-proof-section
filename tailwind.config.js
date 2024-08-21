/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif']
      },
      colors: {
        magenta: {
          DEFAULT: 'hsl(300, 43%, 22%)',
          light: 'hsl(300, 24%, 96%)',
          dark: 'hsl(303, 10%, 53%)',
        },
        'soft-pink': 'hsl(333, 80%, 67%)',
      }
    },
  },
  plugins: [],
}