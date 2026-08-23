/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#221F1B',
        cream: '#FFF8E7',
        creamdeep: '#FBEFD2',
        orange: {
          DEFAULT: '#F2703C',
          dark: '#D9581F',
          light: '#FDEAE0',
        },
        hathat: '#FFC229',
        pink: '#E8368F',
        skyline: '#3B7DD8',
        leaf: '#2FA84F',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Mukta"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
