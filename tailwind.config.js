/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "navy-dark": "#22223B",
        "slate-blue": "#4A4E69",
        "mauve-gray": "#9A8C98",
        "dusty-rose": "#C9ADA7",
        parchment: "#F2E9E4",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
