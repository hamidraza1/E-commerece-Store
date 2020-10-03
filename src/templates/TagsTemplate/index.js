import React from 'react';
import {
  Layout,
  TagContentfulDescription,
  ProductQuantityAdder,
} from 'components';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { AiOutlineBars } from 'react-icons/ai';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

import {
  Description,
  TagProd,
  Options,
  CateogoriesSection,
  Categories,
  Brands,
  ReviewsCollections,
  ProdSection,
  Sort,
  ProdGrid,
  Prod,
  Text,
  ProdName,
  ProdVariant,
  ProdDescription,
  ProdImage,
  QuantityNPrice,
  PriceNReview,
  Price,
  ProdPrice,
  OriginalPrice,
  CartOption,
  StockStatus,
} from './styles';
import ProductContext from 'context/ProductContext';
import { navigate } from '@reach/router';

export default function TagsTemplate(props) {
  const [tileView, setTileView] = React.useState(false);
  const { products } = React.useContext(ProductContext);
  const CurrentURLhandle = window.location.pathname.replace('/products/', '');

  const MoveToSinglePruduct = p => {
    navigate(`/products/${p.handle}`);
  };
  const handleGridView = () => {
    if (tileView === true) {
      setTileView(!tileView);
    }
  };
  const handleTileView = () => {
    if (tileView === false) {
      setTileView(!tileView);
    }
  };

  /* ..................... */
  const [options, setOptions] = React.useState(true);
  const [brands, setBrands] = React.useState(true);
  const [reviews, setReviews] = React.useState(true);

  const handleMenu = e => {
    setOptions(!options);
  };
  const handleBrand = e => {
    setBrands(!brands);
  };
  const handleReviewsCollections = e => {
    setReviews(!reviews);
  };

  const container = {
    hidden: {
      height: 0,

      transition: { duration: 0.3 },
    },
    show: {
      height: 'auto',
      transition: { duration: 0.3 },
    },
  };
  var vendors = products.map(product => product.vendor);
  var uniqueVendors = Array.from(new Set(vendors));

  return (
    <Layout>
      <Description>
        <TagContentfulDescription />
      </Description>

      <TagProd>
        <CateogoriesSection>
          <Categories>
            <h4 role="presentation" onClick={handleMenu}>
              <span>Cateogories </span>
              {options ? (
                <MdArrowDropUp size="1.5em" />
              ) : (
                <MdArrowDropDown size="1.5em" />
              )}
            </h4>
            <Options
              variants={container}
              initial="hidden"
              animate={options ? 'show' : 'hidden'}
              style={{ originY: '0' }}
            >
              {products.map(product => (
                <span>
                  <div>{product.tags[0]}</div>
                </span>
              ))}
            </Options>
          </Categories>
          <ReviewsCollections>
            <h4 role="presentation" onClick={handleReviewsCollections}>
              <span>Reviews </span>
              {reviews ? (
                <MdArrowDropUp size="1.5em" />
              ) : (
                <MdArrowDropDown size="1.5em" />
              )}
            </h4>
            <Options
              variants={container}
              initial="hidden"
              animate={reviews ? 'show' : 'hidden'}
              style={{ originY: '0' }}
            >
              <span>
                <div>Reviews</div>
                <div>1</div>
              </span>
              <span>
                <div>Reviews</div>
                <div>2</div>
              </span>
              <span>
                <div>Reviews</div>
                <div>3</div>
              </span>
            </Options>
          </ReviewsCollections>
          <Brands>
            <h4 role="presentation" onClick={handleBrand}>
              <span>Brands </span>
              {brands ? (
                <MdArrowDropUp size="1.5em" />
              ) : (
                <MdArrowDropDown size="1.5em" />
              )}
            </h4>
            <Options
              variants={container}
              initial="hidden"
              animate={brands ? 'show' : 'hidden'}
              style={{ originY: '0' }}
            >
              {uniqueVendors.map(vendor => (
                <span>
                  <div>{vendor}</div>
                  <div>
                    (
                    {
                      products.filter(product => product.vendor === vendor)
                        .length
                    }
                    )
                  </div>
                </span>
              ))}
            </Options>
          </Brands>
        </CateogoriesSection>
        <ProdSection>
          <Sort>
            <select>
              <option>Sort</option>
              <option>Name A-Z</option>
              <option>Name Z-A</option>
            </select>
            <div>
              <div>View</div>
              <div role="presentation" onClick={handleGridView}>
                <BsFillGrid3X3GapFill size="1.5rem" />
              </div>
              <div role="presentation" onClick={handleTileView}>
                <AiOutlineBars size="1.5rem" />
              </div>
            </div>
          </Sort>

          <ProdGrid tile={tileView}>
            {products
              .filter(product => product.tags[0] === CurrentURLhandle)
              .map((p, i) => (
                <Prod tile={tileView} key={i}>
                  <Text tile={tileView}>
                    <ProdName onClick={() => MoveToSinglePruduct(p)}>
                      {p.title}
                    </ProdName>
                    <ProdVariant>
                      {products.find(product => product.title === p.title)
                        .variants[0].title === 'Default Title'
                        ? 'Default Title'
                        : products.find(product => product.title === p.title)
                            .variants[0].title}
                    </ProdVariant>
                    <ProdDescription tile={tileView}>
                      {p.description}
                    </ProdDescription>
                    <div>Reviews</div>
                  </Text>

                  <ProdImage tile={tileView}>
                    <img
                      src={
                        products.find(product => product.title === p.title)
                          .images[0].originalSrc
                      }
                      alt=" "
                    />
                  </ProdImage>
                  <QuantityNPrice tile={tileView}>
                    <PriceNReview tile={tileView}>
                      <div>Reviews</div>
                      <Price tile={tileView}>
                        <ProdPrice>
                          Now $
                          {
                            products.find(product => product.title === p.title)
                              .variants[0].price
                          }
                        </ProdPrice>
                        <OriginalPrice>
                          {products.find(product => product.title === p.title)
                            .variants[0].compareAtPriceV2 ? (
                            products.find(product => product.title === p.title)
                              .variants[0].compareAtPriceV2.amount
                          ) : (
                            <div></div>
                          )}
                        </OriginalPrice>
                      </Price>
                    </PriceNReview>
                    <CartOption>
                      {products.find(product => product.title === p.title)
                        .availableForSale ? (
                        <ProductQuantityAdder
                          available={p.variants[0].availableForSale}
                          variantId={p.variants[0].shopifyId}
                          tile={tileView}
                        />
                      ) : (
                        <StockStatus>Out of Stock</StockStatus>
                      )}
                    </CartOption>
                  </QuantityNPrice>
                </Prod>
              ))}
          </ProdGrid>
        </ProdSection>
      </TagProd>
    </Layout>
  );
}
