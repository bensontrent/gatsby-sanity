module.exports = () => ({
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0
    }),
    require('postcss-font-magician')({
      variants: {
        'Montserrat': {
          '300': [],
          '400': [],
          '700': []
        },
        'Open+Sans': {
          '300': [],
          '400': [],
          '700': []
        }
      },
      foundries: ['google']
    })
  ]
})
