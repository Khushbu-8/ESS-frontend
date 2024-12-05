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
        "pink-100" : "#f5f5f5",
        // "base-100" :"#e6dede"
        // "red-100" : "#fbf6f0"
      
      },
      colors: {
        "orange" : "#e92626",
        "primary" : "#e92626",
      }
    },
  },
   plugins: []
}