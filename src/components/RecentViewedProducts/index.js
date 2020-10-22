import React from 'react';
import ProductContext from 'context/ProductContext';
import {
  RecentViewedProductsWrapper,
  ProductWrapper,
  ProductQuantityAdderWrapper,
  PriceNReview,
  Review,
  Price,
  MainImage,
  Title,
} from './styles';
import { ProductQuantityAdder } from 'components';

export function RecentViewedProducts({ Array }) {
  const { products } = React.useContext(ProductContext);

  return (
    <RecentViewedProductsWrapper>
      {Array
        ? Array.map((prod, i) => (
            <ProductWrapper key={i}>
              <Title>
                {products.find(p => p.shopifyId === Array[i])?.title}
              </Title>

              <MainImage>
                <img
                  alt=""
                  src={
                    products.find(p => p.shopifyId === Array[i])?.images[0]
                      .localFile.childImageSharp.fluid.src
                  }
                />
              </MainImage>

              <PriceNReview>
                <Review>Review</Review>
                <Price>
                  $
                  {
                    products.find(p => p.shopifyId === Array[i])?.priceRange
                      .minVariantPrice.amount
                  }
                </Price>
              </PriceNReview>

              <ProductQuantityAdderWrapper>
                <ProductQuantityAdder
                  available={
                    products.find(p => p.shopifyId === Array[i])?.variants[0]
                      .availableForSale
                  }
                  variantId={
                    products.find(p => p.shopifyId === Array[i])?.variants[0]
                      .shopifyId
                  }
                />
              </ProductQuantityAdderWrapper>
            </ProductWrapper>
          ))
        : ''}
    </RecentViewedProductsWrapper>
  );
}
