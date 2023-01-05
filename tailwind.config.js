/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        eyesGlance: {
          from: {
            transform: 'translateX(0px)',
          },
          to: {
            transform: 'translateX(1px)',
          },
        },
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
        screenColorChange: {
          '0%': {
            fill: '#219EBC',
          },
          '100%': {
            fill: '#78BAFF',
          },
        },
      },
      animation: {
        eyesGlance: 'eyesGlance 4s ease-in-out infinite alternate',
        mouseDrag: 'mouseDrag 4s ease-in-out infinite alternate',
        screenColorChange: 'screenColorChange 2s linear infinite alternate',
      },
      fontFamily: {
        nunitoSans: 'Nunito-Sans',
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
