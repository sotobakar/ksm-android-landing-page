module.exports = {
  purge: [
    './*.html',
    './assets/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#11772d',
        secondary: '#fdb141',
        tertiary: '#f4f4f4',
      },
      fontFamily : {
        'viceCitySans' : ['Vice City Sans', 'sans-serif']
      },
      transitionProperty: {
        height: 'height'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
