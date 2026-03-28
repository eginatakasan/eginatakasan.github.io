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
          DEFAULT: '#FFD29D',
          dark: '#FFB563',
        },
        accent: {
          light: '#b8ac8f',
          DEFAULT: '#70a288',
          dark: '#918450',
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
        white: '#fafafa'
      },
    },
  },
  plugins: [],
}
