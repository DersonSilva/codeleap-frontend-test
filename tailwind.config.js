/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#DDDDDD",
        brand: "#7695EC",
        border: "#777777",
        delete: "#FF5151",
        "delete-dark": "#e04848",
        save: "#47B960",
        "save-dark": "#3fa250",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
