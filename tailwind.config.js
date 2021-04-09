module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}', 
    './components.pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        siteBg: "#131113",
        gray2: "#6C6C6C",
      },
      height: {
        'screen-1/2': "50vh"
      },
      width: {
        'screen-1/2': "50vw"
      },
    },
    fontFamily: {
      display: ["poppins", "sans-serif"],
      body: ["poppins", "sans-serif"],
      sans: ["poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {
     width: ['hover', 'focus', 'group-hover'],
    }
  },
  plugins: [],
};
