
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"MBrand Serif"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        bagoos: ['"Bagoos Extended"', 'sans-serif'],
        mozillaText: ['"Mozilla Text"', 'sans-serif'],
        mozillaHeadline: ['"Mozilla Headline"', 'sans-serif'],
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
