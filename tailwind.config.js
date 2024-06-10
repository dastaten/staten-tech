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
        default: '#b3ccff',
        alt: '#75a3ff',
        dark: '#38435c',
        h2: '#8ab0ff',
      },
      backgroundImage: {
        background: "url('/bg.jpg')",
        profile: "url('/profile-bg.png')",
      },
      backgroundColor: {
        default: '#38435c',
        alt: '#75a3ff',
        dark: '#1E293B',
        light: '#b3ccff',
      },
      borderColor: {
        default: '#75a3ff',
        alt: '#b3ccff',
      },
    },
  },
  plugins: [],
};
