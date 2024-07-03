/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

const BASE = 16;
const rem = (px, key = px) => ({ [key]: `${px / BASE}rem` });

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.indigo,
        gray: colors.gray,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow
      },
      spacing: {
        ...rem(16, 'page'),
        ...rem(56, 'navbar'),
        ...rem(72, 'navbar-space')
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', scale: '0.97' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out'
      }
    }
  },
  plugins: []
};
