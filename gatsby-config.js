module.exports = {
  pathPrefix: "/bkmusic",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 50
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/gigs`,
        name: "markdown-pages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img`
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        // Add any options here
      }
    }
  ]
};
