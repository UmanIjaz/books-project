/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      // Add any custom colors, fonts, or other design tokens here
      colors: {
        "book-primary": "#2c3e50",
        "book-secondary": "#34495e",
        "reader-bg": "#f8f9fa",
      },
      fontFamily: {
        reading: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
