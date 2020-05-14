module.exports = {
  siteMetadata: {
    title: `Landing Page AutoForce`,
    description: `Teste de Front-End para a AutoForce.`,
    author: `@paiva`,
    social: [
      { name: 'instagram', url: 'https://www.instagram.com/autoforcebr' },
      { name: 'facebook', url: 'https://pt-br.facebook.com/AutoForcebr/' },
      { name: 'linkedin', url: 'https://br.linkedin.com/company/autoforcebrasil' },
      { name: 'youtube', url: 'https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ/featured' },
      { name: 'blog', url: 'https://blog.autoforce.com' }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
