/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: `'Noto Sans', sans-serif`,
      },
      backgroundColor: {
        "primary-dark-blue": "#153ABA",
        "primary-light-blue": "#C4E0FD",
        "secondary-cream": "#D9D9D9",
      },
      colors: {
        "dark-blue-color": "#153ABA",
        "light-blue-color": "#C4E0FD",
        "darker-color": "#2B2B2B",
        "lighter-color": "#626262",
      },
    },
  },
  plugins: [],
};
