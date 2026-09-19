module.exports = {
  siteMetadata: {
    title: `Daily NightCity`,
    description: `Compagnon de campagne Cyberpunk Red : classes, cartes et lore de Night City.`,
    author: `Daily NightCity`,
    siteUrl: `https://dailynightcity.netlify.app/`,
  },
  trailingSlash: `never`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daily NightCity`,
        short_name: `NightCity`,
        start_url: `/`,
        background_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
