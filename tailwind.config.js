/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
      }
      ,
      colors: {
        primary: "#0F62FE",
        colorBg: "#F2F4F8"
      }
    },
  },
  plugins: [require('daisyui')],
}

