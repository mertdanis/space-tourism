/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/imgs/home/background-home-desktop.jpg')",
        homeMobile: "url('/imgs/home/background-home-mobile.jpg')",
        destinations:
          "url('/imgs/destination/background-destination-desktop.jpg')",
        destinationsMobile:
          "url('/imgs/destination/background-destination-mobile.jpg')",
        crew: "url('/imgs/crew/background-crew-desktop.jpg')",
        crewMobile: "url('/imgs/crew/background-crew-mobile.jpg')",
        technology: "url('/imgs/technology/background-technology-desktop.jpg')",
        technologyMobile:
          "url('/imgs/technology/background-technology-mobile.jpg')",
      },

      fontFamily: {
        title: ["Bellefair"],
        text: ["Barlow"],
      },

      colors: {
        mainDark: "#0B0D17",
        mainLight: "#D0D6F9",
        mainWhite: "#FFFFFF",
      },

      fontSize: {
        h1: "150px",
        h2: "100px",
        h3: "56px",
        h4: "32px",
        h5: "28px",
        nav_text: "16px",
        body_text: "18px",
      },
    },
  },
  plugins: [],
};
