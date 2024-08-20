/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif']
      },
      colors: {
        'dark-magenta': 'hsl(300, 43%, 22%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
      },
      backgroundImage: {
        // 'desk-top': 'url(/assets/images/bg-pattern-top-desktop.svg)',
        'desk-bottom': 'url(/assets/images/bg-pattern-bottom-desktop.svg)'
      }
    },
  },
  plugins: [],
}