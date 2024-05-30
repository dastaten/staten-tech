/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '665px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    fontFamily: {
      sans: ['Hind', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      textColor: {
        default: '#d4ebff',
        alt: '#a1ceff',
      },
      backgroundImage: {
        background: "url('./src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
