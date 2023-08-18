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
        'red':'#ff0000'
      },

      backgroundImage: {
        'hero_pattern': "url('/src/images/hero_image.jpg')",
        
      },
      fontFamily: {
        //'sans': ['Proxima Nova'],
        'cursive':['Lucida Handwriting'],
        'malanya':['malanya'],
      }
    },
    
  },
  plugins: [],
}
