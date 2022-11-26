/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neu-gray": "#e0e0e0",
      },
      borderRadius: {
        30: "30px",
      },
      backgroundImage: {
        "neu-linear-gradient-out": "linear-gradient(145deg, #f0f0f0, #cacaca)",
        "neu-linear-gradient-in": "linear-gradient(145deg, #cacaca, #f0f0f0)",
      },
      boxShadow: {
        "neu-shadow": "11px 11px 22px #bebebe, -11px -11px 22px #ffffff",
      },
    },
  },
  plugins: [],
};
