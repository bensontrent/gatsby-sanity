const {
  api: { projectId, dataset }
} = require('../studio/sanity.json')

require('dotenv').config()

var copydir = require('copy-dir')

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
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
