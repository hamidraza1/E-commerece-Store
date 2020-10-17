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
    {
      resolve: 'gatsby-source-yotpo-shopify',
      options: {
        shopName: process.env.SHOPIFY_STORE_NAME,
        shopifyAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        yotpoAppKey: process.env.YOTPO_APP_KEY,
        apiVersion: '2020-07',
      },
    },
    /* {
      resolve: 'gatsby-source-yotpo',
      options: {
        appKey: process.env.YOTPO_APP_KEY,
        appSecret: process.env.YOTPO_SECRET_KEY,
      },
    }, */
  ],
};
