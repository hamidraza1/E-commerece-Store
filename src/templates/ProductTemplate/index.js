/* eslint-disable jsx-a11y/no-onchange*/
import React from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  ImageGallery,
  ProductQuantityAdder,
  ProductContentfulDescription,
  MiniCart,
} from 'components';
import {
  Grid,
  InfoNImg,
  SelectWrapper,
  ReducedPrice,
  OriginalPrice,
  ReviewNLogo,
  Heading1,
  Heading2,
  PriceNSelectWrapper,
  PriceNQuantity,
  AllInfo,
  AllImgs,
  DescrptionWrapper,
  Descrption,
  StockNNote,
  StockNno,
  Note,
  CartContentsWrapper,
} from './styles';
import CartContext from 'context/CartContext';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
  }
`;

export default function ProductTemplate(props) {
  const { getProductById } = React.useContext(CartContext);
  const { recent, changeRecent } = React.useContext(CartContext);
  const [product, setProduct] = React.useState(null);
  const [selectedVariant, setSelectedVariant] = React.useState(null);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;

  React.useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      setProduct(result);
      setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
    });
  }, [
    getProductById,
    setProduct,
    props.data.shopifyProduct.shopifyId,
    variantId,
  ]);
  React.useEffect(() => {}, []);

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(v => v.id === e.target.value);
    setSelectedVariant(newVariant);

    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      {
        replace: true,
      }
    );
  };

  return (
    <Layout>
      <Grid>
        <InfoNImg>
          <Heading1>
            <h4>{props.data.shopifyProduct.title}</h4>
            <p>{selectedVariant ? selectedVariant.title : ''}</p>
            <div>Review</div>
          </Heading1>
          <AllImgs>
            <ImageGallery
              selectedVariantImageId={selectedVariant?.image.id}
              images={props.data.shopifyProduct.images}
            />
          </AllImgs>

          <AllInfo>
            <Heading2>
              <h4>{props.data.shopifyProduct.title}</h4>
              <p>{selectedVariant ? selectedVariant.title : ''}</p>
            </Heading2>
            <ReviewNLogo>
              <div>Review</div>
              <div>Logo</div>
            </ReviewNLogo>
            {product?.availableForSale && !!selectedVariant && (
              <PriceNSelectWrapper>
                {!!selectedVariant && (
                  <PriceNQuantity>
                    <div>
                      <ReducedPrice>${selectedVariant.price}</ReducedPrice>{' '}
                      <OriginalPrice>
                        Was ${selectedVariant.compareAtPrice}
                      </OriginalPrice>{' '}
                    </div>

                    <ProductQuantityAdder
                      available={selectedVariant.available}
                      variantId={selectedVariant.id}
                    />
                  </PriceNQuantity>
                )}
                {product?.variants.length > 1 && (
                  <SelectWrapper>
                    <div>Shop other sizes and multipacks</div>
                    <select
                      onChange={handleVariantChange}
                      value={selectedVariant.id}
                    >
                      {product.variants.map(v => (
                        <option key={v.id} value={v.id}>
                          {v.title} - ${selectedVariant.price}
                        </option>
                      ))}
                    </select>
                  </SelectWrapper>
                )}
              </PriceNSelectWrapper>
            )}
          </AllInfo>
        </InfoNImg>
        <DescrptionWrapper>
          <StockNNote>
            <StockNno>
              <div>
                {selectedVariant?.available ? 'In Stock' : 'Out of Stock'}
              </div>
              <div> {selectedVariant?.sku} </div>
            </StockNno>
            <Note>
              Please note images are for illustration purposes and may differ
              from the product(s) you receive
            </Note>
          </StockNNote>
          <Descrption>{props.data.shopifyProduct.description}</Descrption>
        </DescrptionWrapper>
        {/* <CartContentsWrapper>
          <MiniCart />
        </CartContentsWrapper> */}
      </Grid>

      <ProductContentfulDescription
        title={props.data.shopifyProduct.title}
        id={props.data.shopifyProduct.shopifyId}
      />
    </Layout>
  );
}
