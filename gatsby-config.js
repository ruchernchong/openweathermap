require("dotenv").config();

const { version } = require("./package.json");

module.exports = {
  siteMetadata: {
    title: "OpenWeatherMap",
    description: "OpenWeatherMap app",
    author: "Chong Ru Chern",
    version: `v${version}`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    // `gatsby-plugin-material-ui`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`
  ]
};
