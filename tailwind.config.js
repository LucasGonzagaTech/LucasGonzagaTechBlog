/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'purple': '#140152',
      'blue': '#3F37C9',
      'white': '#fefae0',
      'gray': '#8B8888',
      'black':'#000000'
    },
    fontFamily: {
      sans:'Inter sans-serif',
    },
    extend: {},
  },
  plugins: [],
}

