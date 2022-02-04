module.exports = {
  siteMetadata: {
    title: `Mægnets`,
    siteUrl: `https://maegnets.de`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-postcss",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "q",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.svg",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "src/assets",
        name: "assets"
      },
    }
  ],
};
