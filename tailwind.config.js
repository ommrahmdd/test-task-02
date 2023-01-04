/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greyColor: "#F5F5F5",
        orangedColor: " #EF9011",
        orangedDarkColor: " #FF764C",
        blackColor: "#242731",
        purpleColor: "#A162F7",
        pinkColor: "#FF7E86",
        yellowColor: "#F6CC0D",
        blueColor: "#2884FF",
        tertiaryColor: "#E1DFA4",
        tertiarySecondaruColor: "#E3ECF1",
        tertiaryThirdColor: "#F4E3E5",
      },
    },
  },
  plugins: [],
};
