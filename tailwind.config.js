/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-background": "url('/imgs/home/background-home-desktop.jpg')",
        "destination-background":
          "url('/imgs/destination/background-destination-desktop.jpg')",
        "crew-background": "url('/imgs/crew/background-crew-desktop.jpg')",
        "technology-background":
          "url('/imgs/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
