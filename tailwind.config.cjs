/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        siteBg: '#131113',
        gray2: '#6C6C6C',
        sitePurple: '#5C04CC',
        project: {
          accents: '#DF2935',
          green: '#21A179',
        },
        headline: {
          text: '#898989',
        },
      },
      height: {
        'screen-1/2': '50vh',
      },
      width: {
        'screen-1/2': '50vw',
      },
      screens: {
        xsm: '450px',
      },
    },
    fontFamily: {
      display: ['poppins', 'sans-serif'],
      body: ['poppins', 'sans-serif'],
      sans: ['poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
