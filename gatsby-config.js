module.exports = {
  pathPrefix: "/bkmusic",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/gigs`,
        name: "markdown-pages"
      }
    },
    `gatsby-transformer-remark`
  ]
};
