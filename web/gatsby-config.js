
const { api: { projectId, dataset } } = require('../studio/sanity.json')

require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-728912-19',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**'],
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'bensontrent.com'
      }
    }
  ]
}
