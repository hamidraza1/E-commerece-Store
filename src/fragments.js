import { graphql, useStaticQuery } from 'gatsby';

export const productFields = graphql`
  fragment ShopifyProductFields on ShopifyProduct {
    shopifyId
    title
    description
    tags
    images {
      originalSrc
      id
      localFile {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
