import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { TagDescriptionWrapper } from './styles';

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

export function CollectionContentfulDescription(props) {
  const { allContentfulBannerPost } = useStaticQuery(query);
  /*   const { products, collections } = React.useContext(ProductContext); */

  /* const URLid = props.prop.pageContext.shopifyId;
  const CollectionMatchedId = collections
    .map(collection => collection.shopifyId)
    .find(id => id === URLid);
  const URLidHandle = collections.find(
    collection => collection.shopifyId === CollectionMatchedId
  ).handle; */

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
