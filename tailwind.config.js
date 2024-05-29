/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        default: '#d4ebff',
        alt: '#a1ceff',
      },
      fontFamily: {
        hind: ['Hind', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        background: "url('./src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
