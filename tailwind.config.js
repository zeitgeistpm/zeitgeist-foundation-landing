module.exports = {
  content: [
    "./templates/**/*.pug",
    "./js/**/*.js",
  ],
  theme: {
    fontFamily: {
      main: ['Lato', 'sans-serif'],
      highlight: ['Kanit', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      'md': '640px',
      'lg': '708px',
      'xl': '1148px',
    },
    extend: {
      colors: {
        main: '#0001FE',
        secondary: '#8078FF'
      }
    },
  },
  plugins: [],
}
