/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#2C2C2C',    // Dark charcoal
          secondary: '#1E1E1E',  // Slightly darker
        },
        light: {
          primary: '#E4E4E4',    // Light gray
          secondary: '#F5F5F5',  // Off-white
        },
        accent: {
          teal: '#A8DADC',       // Soft teal
          pink: '#FFC1CC',       // Soft pink
          purple: '#B39CD0',     // Lavender
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}