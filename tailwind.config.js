/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './dist/*.html',          // Scanne les fichiers HTML dans dist
    './src/**/*.{html,js}',   // Scanne les fichiers HTML et JS dans src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1b1b1b',
        secondary: '#262626',
        accent: '#00ff88',
        text: '#ffffff',
        hover: '#2ecc71',
        dark: '#161619',
        site: '#090A0E',
      },
      fontFamily: {
        content: ['DM Sans', 'sans-serif'],  // Typographie principale
        serif: ['Merriweather', 'serif'], // Typographie secondaire
      },
      spacing: {
        '16': '4rem',  // Ajout d'un espacement personnalisé
      },
      borderRadius: {
        'xl': '1rem',    // Ajout d'un rayon de bordure personnalisé
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
