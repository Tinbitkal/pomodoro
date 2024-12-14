module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Customize colors for dark and light themes
        background: {
          light: "#ffffff",
          dark: "#1f2937",
        },
      },
    },
  },



    
  plugins: [],
};
