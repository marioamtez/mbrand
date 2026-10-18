
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Goalking', 'serif'],
        sans: ['Goalking', 'sans-serif'],
        bagoos: ['Goalking', 'sans-serif'],
        mozillaText: ['Goalking', 'sans-serif'],
        mozillaHeadline: ['Goalking', 'sans-serif'],
      },
      colors: {
        watson: {
          yellow: '#D4FF00',
        }
      }
    },
  },
  plugins: [],
}
