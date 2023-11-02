/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "btnwhite":'#FFFFFF',
        "tblue":'#0A98E7',
      },
    },
  },
  plugins: [],
}