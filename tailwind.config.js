module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', 
        accent: '#F59E0B', 
        neutral: {
          50: '#F9FAFB', 
          200: '#E5E7EB', 
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};