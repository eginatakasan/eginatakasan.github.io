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
        gentleWave: {
          '0%': {
            transform: 'translateY(0) rotateX(0deg)',
            opacity: 40,
          },
          '50%': {
            transform: 'translateY(0) rotateX(20deg)',
            opacity: 40,
          },
          '100%': {
            transform: 'translateY(2px) rotateX(45deg)',
            opacity: 10,
          }
        },
        wave: {
          '0%': {
            transform: 'translateY(0px) rotateX(0deg)',
            opacity: 40,
          },
          '50%': {
            transform: 'translateY(4px) rotateX(30deg)',
            opacity: 10,
          },
          '100%': {
            transform: 'translateY(8px) rotateX(60deg)',
            opacity: 10,
          }
        },
        slideInRight: {
          '0%': {
            transform: 'translateX(100vw)',
          },
          '100%': {
            transform: 'translateX(0)',
          }
        }
      },
      animation: {
        eyesGlance: 'eyesGlance 4s ease-in-out infinite alternate',
        mouseDrag: 'mouseDrag 4s ease-in-out infinite alternate',
        screenColorChange: 'screenColorChange 2s linear infinite alternate',
        waves: 'wave 30s ease-in-out infinite alternate',
        gentleWave: 'gentleWave 20s ease-in-out infinite alternate',
        slideInRight: 'slideInRight 800ms ease-out ',
      },
      fontFamily: {
        nunitoSans: 'Nunito-Sans',
        tokyo: 'Tokyo',
        sofiaSans: 'Sofia Sans Extra Condensed',
      },
      colors: {
        primary: {
          light: '#fbc4ab',
          DEFAULT: '#f8ad9d',
          dark: '#f08080',
        },
        accent: {
          DEFAULT: '#fbf8cc',
          dark: '#fde4cf',
        },
        secondary: {
          light: '#a2d2ff',
          DEFAULT: '#669bbc',
          dark: '#457b9d',
        },
        mustard: '#ee9b00',
        teal: '#219EBC',
        skyBlue: '#78BAFF',
        textBlack: '#1E1E1E',
        textWhite: '#FFFFFF',
        frosted: '#d9d9d920',
      },
    },
  },
  plugins: [],
}
