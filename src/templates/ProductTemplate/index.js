/* eslint-disable jsx-a11y/no-onchange*/
import React from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  ImageGallery,
  ProductQuantityAdder,
  ProductContentfulDescription,
  SEO,
} from 'components';
import { AiFillHome } from 'react-icons/ai';
import { IoMdArrowDropright } from 'react-icons/io';
import {
  ProdTrack,
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
} from './styles';
import CartContext from 'context/CartContext';
import ProductContext from 'context/ProductContext';
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
  const { collections, products } = React.useContext(ProductContext);
  const { getProductById } = React.useContext(CartContext);
  /* const { recent, changeRecent } = React.useContext(CartContext); */
  const [product, setProduct] = React.useState(null);
  const [selectedVariant, setSelectedVariant] = React.useState(null);
  const [CurrentURLhandle, setCurrentURLhandle] = React.useState();
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
  React.useEffect(() => {
    setCurrentURLhandle(window.location.pathname.replace('/products/', ''));
  }, []);

  var pructsTag = products.find(product => product.handle === CurrentURLhandle)
    ?.tags[0];
  var TrackedCollection = collections.find(collection =>
    collection.products.find(prod => prod.tags[0] === pructsTag)
  )?.handle;
  var TrackedTag = products.find(product => product.handle === CurrentURLhandle)
    ?.tags[0];

  return (
    <Layout>
      <SEO
        description={props.data.shopifyProduct.title}
        title={props.data.shopifyProduct.title}
      />
      <ProdTrack>
        <div>
          <AiFillHome onClick={() => navigate(`/`)} />
        </div>
        <IoMdArrowDropright />
        <div
          onClick={() => navigate(`/products/${TrackedCollection}`)}
          role="presentation"
        >
          {TrackedCollection}
        </div>
        <IoMdArrowDropright />
        <div
          onClick={() => navigate(`/products/${TrackedTag}`)}
          role="presentation"
        >
          {TrackedTag}
        </div>
        <IoMdArrowDropright />
        <div>{CurrentURLhandle}</div>
      </ProdTrack>
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
