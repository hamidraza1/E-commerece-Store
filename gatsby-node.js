const path = require('path');

exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allShopifyCollection {
        edges {
          node {
            shopifyId
            handle
          }
        }
      }
      allShopifyProduct {
        edges {
          node {
            shopifyId
            handle
          }
        }
      }
      allShopifyProduct {
        edges {
          node {
            tags
          }
        }
      }
    }
  `);

  data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `products/${node.handle}`,
      context: {
        shopifyId: node.shopifyId,
      },
      component: path.resolve(`./src/templates/ProductTemplate/index.js`),
    });
  });

  data.allShopifyCollection.edges.forEach(({ node }) => {
    createPage({
      path: `products/${node.handle}`,
      context: {
        shopifyId: node.shopifyId,
      },
      component: path.resolve(`./src/templates/CollectionTemplate/index.js`),
    });
  });

  data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `products/${node.tags}`,
      context: {
        shopifyId: node.shopifyId,
      },
      component: path.resolve(`./src/templates/TagsTemplate/index.js`),
    });
  });
};
