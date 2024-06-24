/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.blue,
        neutral: colors.gray,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
      },
    },
    theme: {},
  },
  plugins: [],
};
