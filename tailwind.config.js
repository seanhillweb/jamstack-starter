const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      colors: {
        'ws-blue': {
          100: '#E6F0FF',
          200: '#BFDAFF',
          300: '#99C3FF',
          400: '#4D97FE',
          500: '#006AFE',
          600: '#005FE5',
          700: '#004098',
          800: '#003072',
          900: '#00204C',
        },
      }
    },
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus'],
    opacity: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus'],
    scale: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus'],
    textColor: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus'],
    textDecoration: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus'],
    transitionProperty: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus'],
    translate: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus'],
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {

      // https://github.com/tailwindlabs/discuss/issues/196
      let outlineUtility = {};
      const outlinePrefix = '2px solid';
      const colors = theme('colors');
      Object.keys( colors ).forEach(color => {

        const colorData = colors[color];
        if(typeof colorData === 'string') {
          outlineUtility[`.outline-${color}`] = {
            outline: `${outlinePrefix} ${colorData}`,
          }
        }
        else {
          Object.keys(colorData).forEach(colorVariation => {
            outlineUtility[`.outline-${color}-${colorVariation}`] = {
              outline: `${outlinePrefix} ${colorData[colorVariation]}`,
            }
          });
        }
      });

      addUtilities(outlineUtility, {
        variants: ['responsive', 'focus']
      })
    })
  ],
  purge: process.env.NODE_ENV === 'production' ? {
    enabled: true,
    content: ['src/**/*.njk', 'src/**/*.js'],
  } : {}
}