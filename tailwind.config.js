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
        default: '#bfcfff',
        alt: '#94b8ff',
        dark: '#38435c',
      },
      backgroundImage: {
        background: "url('/bg.jpg')",
      },
      backgroundColor: {
        default: '#38435c',
        alt: '#94b8ff',
        dark: '#1E293B',
        light: '#bfcfff',
      },
      borderColor: {
        default: '#94b8ff',
        alt: '#bfcfff',
      },
    },
  },
  plugins: [],
};
