/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    
    extend: {
      colors: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)'
      },
      
      backgroundImage: {
        'backgroundM': "url('./images/pattern-background-mobile.svg')",
        'backgroundD': "url('./images/pattern-background-desktop.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },

      maxWidth: {
        'custom': '320px',
      }
    },
  },
  plugins: [],
}
