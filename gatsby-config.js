// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// const path = require('path')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
const data = require('./src/data/website.json')
// const googleServiceAccountKey = require('./src/data/service-account.json')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = data.websiteUrl,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
// const cwd = process.cwd()
// const purgeCssCheck = '!(*.d).{ts,js,jsx,tsx}'

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------

module.exports = {
  pathPrefix: data.pathPrefix,
  siteMetadata: {
    title: data.websiteName,
    siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-react-helmet`, // https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    },
    {
      resolve: `gatsby-plugin-sitemap`, // https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap
    },
    {
      resolve: `gatsby-plugin-nprogress`, // https://www.gatsbyjs.org/packages/gatsby-plugin-nprogress/
      options: {
        color: `tomato`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`, // https://next.gatsbyjs.org/packages/gatsby-plugin-robots-txt/?=
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-remove-trailing-slashes`, // https://www.npmjs.com/package/gatsby-plugin-remove-trailing-slashes
    },
    {
      resolve: `gatsby-plugin-fastclick`, // https://github.com/escaladesports/gatsby-plugin-fastclick
    },
    {
      resolve: `gatsby-plugin-google-analytics`, // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics
      options: {
        trackingId: data.googleAnalyticsID,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`, // https://www.npmjs.com/package/gatsby-plugin-favicon
      options: {
        logo: './src/assets/logo.png',
        // WebApp Manifest Configuration
        appName: data.websiteName,
        appDescription: data.websiteDescription,
        developerName: data.org.name,
        developerURL: data.org.url,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: true,
          windows: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`, // https://www.gatsbyjs.org/packages/gatsby-plugin-canonical-urls
      options: {
        siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-less`, // https://www.gatsbyjs.org/packages/gatsby-plugin-less/
    },
  ],
}
