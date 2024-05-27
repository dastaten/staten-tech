/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        default: '#b0d0eb',
      },
      fontFamily: {
        hind: ['Hind', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
