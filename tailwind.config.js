module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components.pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        siteBg: '#131113',
        gray2: '#6C6C6C',
        sitePurple: '#5C04CC',
        project: {
          accents: '#DF2935',
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
