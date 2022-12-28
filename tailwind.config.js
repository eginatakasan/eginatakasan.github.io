/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        mouseDrag: {
          '0%': {
            transform: 'translateX(2px)',
          },
          '25%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(-4px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        thumbUp: {
          '0%': 'rotate(45deg)',
          '100%': 'rotate(0deg)',
        },
        screenColorChange: {
          '0%': {
            fill: '#8ECAE6',
          },
          '100%': {
            fill: '#78BAFF',
          },
        },
      },
      animation: {
        mouseDrag: 'mouseDrag 8s ease-in-out infinite alternate',
        thumbUp: 'thumbUp 2s ease-in-out infinite alternate',
        screenColorChange: 'screenColorChange 4s linear infinite alternate',
      },
      fontFamily: {
        nunitoSans: '',
      },
      colors: {
        primary: {
          light: '#8ECAE6',
          dark: '#1F3449',
        },
        secondary: '#35383F',
        accent: '#78BAFF',
        teal: '#219EBC',
        skyBlue: '#78BAFF',
        textBlack: '#1E1E1E',
        textWhite: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
