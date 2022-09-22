/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "530px",
      md: "830px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        roboto: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
