/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        light: ["#F5F5F5"],
        dark: ["#121212"],
        primary: ["#316FF6"],
      },
    },
  },
  plugins: [],
};
