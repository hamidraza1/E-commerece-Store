require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Manchester Chemist`,
    description: `We Provide Medicines`,
    author: `@tomphill`,
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-optional-chaining`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:400`,
          'open sans:400i',
          `open sans\:700`,
          'open sans:700i',
          `open sans\:800`,
          'open sans:800i',
        ],
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.GATSBY_STORE_NAME,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        apiVersion: '2020-07',
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-shopify-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4045v25pb6qt`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    /* {
      resolve: 'gatsby-source-yotpo-shopify',
      options: {
        shopName: `MyChemistry`,
        shopifyAccessToken: `679c479114cb015b8176b70be0aa4f61`,
        yotpoAppKey: `anEQ6vnZofKCvWIbAf4NkNPXad0ocbMtdIxbr6CW`,
      },
    }, */
    /*  {
      resolve: 'gatsby-source-yotpo',
      options: {
        appKey: `anEQ6vnZofKCvWIbAf4NkNPXad0ocbMtdIxbr6CW`,
        appSecret: `Orv6JZoguYJa2OE8yIAAPHZwAMm7tmBCIdDDy6r7`,
      },
    }, */
  ],
};
