/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'netralSilver':'#F5F7FA',
        'netralDGrey' : '#4D4D4D',
        'brandPrimary' : '#4CAF4F',
        'netralGrey' : '#717171',
      }
    },
  },
  plugins: [],
}

