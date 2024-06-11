/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'purple': '#10002B',
      'blue': '#3F37C9',
      'white': '#FFFFFF',
      'gray': '#8B8888'
    },
    fontFamily: {
      sans:'Inter sans-serif',
    },
    extend: {},
  },
  plugins: [],
}

