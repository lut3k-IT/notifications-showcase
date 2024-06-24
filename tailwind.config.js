/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

const BASE = 16;
const rem = (px, key = px) => ({ [key]: `${px / BASE}rem` });

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.blue,
        gray: colors.gray,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
      },
      spacing: {
        ...rem(16, 'page'),
      },
    },
  },
  plugins: [],
};
