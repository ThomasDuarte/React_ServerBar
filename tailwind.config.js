/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      colors: {
        "nav-bar-color": "#8a2be2",
        "body-color": "#8a2899",
      },
    },
    fontFamily: {
      original: ["original-font"],
    },
  },
};
