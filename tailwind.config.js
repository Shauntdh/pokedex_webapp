module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1600px",
      },
      fontSize: {
        "512xl": "512px",
      },
      width: {
        "search-bar": "512px",
      },
      colors: {
        "poke-yellow": "#ffcb05",
        "poke-blue": "#2a75bb",
      },
    },
  },
  plugins: [],
};
