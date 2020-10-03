import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { TagDescriptionWrapper } from './styles';
/* import ProductContext from 'context/ProductContext'; */

const query = graphql`
  {
    allContentfulBannerPost {
      edges {
        node {
          title
          description {
            description
          }
        }
      }
    }
  }
`;

export function TagContentfulDescription() {
  const { allContentfulBannerPost } = useStaticQuery(query);
  /*  const { products, collections } = React.useContext(ProductContext); */
  const URLidHandle = window.location.pathname.replace('/products/', '');
  const ContentPageBannerData = allContentfulBannerPost.edges.find(
    ({ node }) => node.title === URLidHandle
  );

  return (
    <TagDescriptionWrapper>
      <h3>{ContentPageBannerData?.node.title}</h3>
      <p>{ContentPageBannerData?.node.description.description}</p>
    </TagDescriptionWrapper>
  );
}
