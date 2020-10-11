import React from 'react';
import {
  Layout,
  SEO,
  /* SEO,
  HomePageCollectionsGrid,
  FeaturedProducts, */
  HomePageBanner,
  HomePageProducts,
} from 'components';
/* import ProductContext from 'context/ProductContext'; */

const IndexPage = () => {
  /*  const { collections } = React.useContext(ProductContext); */

  return (
    <Layout>
      <SEO description="Manchester Chemist Store Homepage" title="Homepage" />
      <HomePageBanner />
      <HomePageProducts />
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
