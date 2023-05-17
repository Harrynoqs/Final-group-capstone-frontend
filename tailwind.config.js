/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 576px) { ... }

      'md': '874px',
      // => @media (min-width: 960px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [
    // require('flowbite/plugin'),
  ],
});
