const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/index.html', './src/**/*.{js, ts, jsx, tsx, mjs, cjs}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus-jakarta-sans', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        customShadow: '0px 32px 64px 0px rgba(19, 48, 65, 0.10)',
      },
    },
    colors: {
      lime: '#D8DB2F',
      slate: {
        100: '#E4F4FD',
        300: '#9ABED5',
        500: '#6B94A8',
        700: '#4E6E7E',
        900: '#133041',
      },
      white: '#FFFFFF',
      red: '#D73328',
    },
    screens: {
      sm: '688px',
      lg: '1008px',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
