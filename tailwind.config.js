/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          1: '#212429',
          2: '#323439',
        },
        green: {
          1: '#64C372',
          brightGreen: '#7AEA89',
          blueishGreen: '#49988E',
          middleGreen: '#62C28C',
        },
      },
    },
  },
  plugins: [],
};
