/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a0fa8',
        accent: '#d4521a',
        cream: '#f5ddb8',
        'dark-navy': '#0d0a5e',
        'darker-navy': '#0a0730',
        'text-primary': '#1a1a2e',
        'text-light': '#f5f5f5',
        'soft-cream': '#fdf6ee',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
