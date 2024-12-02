/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor :{
        "orange" : "#e92626",
        "primary" : "#e92626"
      
      },
      colors: {
        "orange" : "#e92626",
        "primary" : "#e92626",
      }
    },
  },
   plugins: [require('daisyui')]
}