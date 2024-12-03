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
        "primary" : "#e92626",
        "pink-100" : "#fbf6f0",
        // "red-100" : "#fbf6f0"
      
      },
      colors: {
        "orange" : "#e92626",
        "primary" : "#e92626",
      }
    },
  },
   plugins: [require('daisyui')]
}