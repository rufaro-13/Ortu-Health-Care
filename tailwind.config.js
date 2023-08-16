/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#231f32',
      'secondary': '#ff0066',
    }),
    extend: {
      colors: {
        'navcolour':'#231f32',
        'pinktheme':'#ff1493',
        'bluetheme':'#89cff0',
      }
    },
    
  },
  plugins: [],
}
