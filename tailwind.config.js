/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
			colors: {
				primary: "#4318FF",
				secondary: "#7551FF",
				lightBg: "#F4F7FE",
				darkBg: "#0b1437",
				"dark-color": "#111C44",
				textColor: "#A3AED0",
				headingColor: "#2B3674",
				"green-color": "#05CD99",
			},
		},
  },
  plugins: [require('daisyui')],
}
