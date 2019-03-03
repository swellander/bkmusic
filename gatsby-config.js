module.exports = {
  pathPrefix: "/bkmusic",
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/gigs`,
        name: "markdown-pages"
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
