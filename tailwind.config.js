module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        14: "repeat(14, minmax(0, 1fr))",

      },
    },
  },
  plugins: [],
};
