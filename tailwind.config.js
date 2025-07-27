/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        },
        widen: {
          'from': { width: '0' },
          'to': { width: '7ch' },
        },
        blink: {
          '0%': { opacity: 1 },
          '40%': { opacity: 1 },
          '50%': { opacity: 0 },
          '60%': { opacity: 1 },
          '100%': { opacity: 1 },
        },
        blinkCaret: {
          'from': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
          'to': { borderClor: 'transparent' },
        }
      },
      animation: {
        eyesGlance: 'eyesGlance 4s ease-in-out infinite alternate',
        mouseDrag: 'mouseDrag 4s ease-in-out infinite alternate',
        screenColorChange: 'screenColorChange 2s linear infinite alternate',
        waves: 'wave 30s ease-in-out infinite alternate',
        gentleWave: 'gentleWave 20s ease-in-out infinite alternate',
        slideInRight: 'slideInRight 800ms ease-out ',
        typing: 'widen 2s steps(15, end), blinkCaret 800ms step-end infinite',
        blink: 'blink 4s linear infinite',
      },
      fontFamily: {
        nunitoSans: 'Nunito-Sans',
        tokyo: 'Tokyo',
        cardo: 'Cardo',
        raleway: 'Raleway',
        sofiaSans: 'Sofia Sans Extra Condensed',
      },
      colors: {
        primary: {
          light: '#ffd6ff',
          DEFAULT: '#e7c6ff',
          dark: '#a48de9',
        },
        accent: {
          light: '#FFE193',
          DEFAULT: '#ECC35A',
          dark: '#c79b2c',
        },
        secondary: {
          light: '#a2d2ff',
          DEFAULT: '#b8c0ff',
          dark: '#6e88e7',
        },
        mustard: '#ee9b00',
        teal: '#219EBC',
        skyBlue: '#78BAFF',
        lightGray: '#9E9E9E',
        yellow: '#ECC35A',
        textBlack: '#1E1E1E',
        textWhite: '#FFFFFF',
        frosted: '#d9d9d920',
      },
    },
  },
  plugins: [],
}
