/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  content: ['./src/views/index.html', './src/views/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        desk: "url('assets/images/marketing/supplies-on-desk.png')",
        ['white-board']: "url('assets/images/marketing/group-around-whiteboard.png')",
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
