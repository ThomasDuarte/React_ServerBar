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
        "nav-bar-color": "#23272a",
        "body-color": "#2c2f33",
      },
    },
    fontFamily: {
      original: ["original-font"],
    },
  },
};
