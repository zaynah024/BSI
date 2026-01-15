/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3365E3", // Your custom primary color
        // Add other custom colors if needed
      },
    },
  },
  plugins: [],
}
