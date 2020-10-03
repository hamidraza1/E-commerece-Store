import React from 'react';
import {
  Layout,
  /* SEO,
  HomePageCollectionsGrid,
  FeaturedProducts, */
  HomePageBanner,
} from 'components';
/* import ProductContext from 'context/ProductContext'; */

const IndexPage = () => {
  /*  const { collections } = React.useContext(ProductContext); */

  return (
    <Layout>
      <HomePageBanner />
      {/* <HomePageCollectionsGrid
        collections={collections.filter(
          collection => collection.title !== 'Featured Products'
        )}
      /> */}
      {/* {!!collections.find(
        collection => collection.title === 'Featured Products'
      ) && <FeaturedProducts />} */}
    </Layout>
  );
};

export default IndexPage;
