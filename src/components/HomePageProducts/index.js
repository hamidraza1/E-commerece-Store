import React from 'react';
import {
  HomePageProductsWrapper,
  ProductGridWrapper,
  ProductGrid,
  Title,
  Variant,
  Image,
  Btn,
  MainTitle,
} from './styles';
import { navigate } from '@reach/router';
import { BsFillStarFill } from 'react-icons/bs';
import ProductContext from 'context/ProductContext';
export function HomePageProducts() {
  const { products } = React.useContext(ProductContext);

  return (
    <HomePageProductsWrapper>
      <MainTitle>
        <BsFillStarFill size="1.5rem" />
        Popular Products
      </MainTitle>
      <ProductGridWrapper>
        {products.map((product, i) => (
          <ProductGrid key={i}>
            <Title>{product.title}</Title>
            <Variant>{product.variants[0].title}</Variant>
            <Image>
              <img
                alt=""
                src={product.images[0].localFile.childImageSharp.fluid.src}
              />
            </Image>

            <Btn onClick={() => navigate(`/products/${product.handle}`)}>
              ShopNow
            </Btn>
          </ProductGrid>
        ))}
      </ProductGridWrapper>
    </HomePageProductsWrapper>
  );
}
