/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'facebook': '#039be5',
        'teclu':'#0406ee',
        'teclu2':'#e50108',
      }
    },
  },
  plugins: [],
}
