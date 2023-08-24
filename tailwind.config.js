/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/imgs/home/background-home-desktop.jpg')",
        destinations:
          "url('/imgs/destination/background-destination-desktop.jpg')",
        crew: "url('/imgs/crew/background-crew-desktop.jpg')",
        technology: "url('/imgs/technology/background-technology-desktop.jpg')",
      },

      fontFamily: {
        title: ["Bellefair"],
      },
      text: ["Barlow"],
    },
  },
  plugins: [],
};
