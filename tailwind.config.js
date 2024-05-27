/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
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
        'hero_pattern': "url('https://i.ibb.co/n8vYyDc/hero-image.jpg')",
        'team_work':"url('/src/images/team_4540467 (1).png')",
        
      },
      fontFamily: {
        //'sans': ['Proxima Nova'],
        'cursive':['Lucida Handwriting'],
        'malanya':['malanya'],
      }
    },
    
  },
  plugins: [require('flowbite/plugin')],
}
