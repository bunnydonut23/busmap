/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00896B',
        'primary-light': '#EAF8F3',
        navy: '#10284A',
        muted: '#6B7890',
        border: '#E3ECEA',
        background: '#F6F8FA',
      },
    },
  },
  plugins: [],
}
