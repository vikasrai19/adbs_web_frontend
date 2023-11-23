/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "btnwhite": '#FFFFFF',
        "tblue": '#0A98E7',
        "secondary":"#eff6ff",
        "inputbg": '#E6E6E6',
      },
      fontFamily: {
        poppy: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}