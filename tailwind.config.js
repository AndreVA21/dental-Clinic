/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    colors: {
      'wite-main':'#ffffff',
      'black-main' :'#000000',
      'gray-main':'#d1d5db'
    },
  },
  plugins: [],
}

