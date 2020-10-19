/* eslint-disable jsx-a11y/no-onchange*/
import React from 'react';
import {
  Layout,
  TagContentfulDescription,
  ProductQuantityAdder,
} from 'components';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { AiOutlineBars } from 'react-icons/ai';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { IoMdArrowDropright } from 'react-icons/io';
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
  TagsTrack,
} from './styles';
import ProductContext from 'context/ProductContext';
import { navigate } from '@reach/router';

export default function TagsTemplate(props) {
  const [tileView, setTileView] = React.useState(false);
  const { collections, products } = React.useContext(ProductContext);
  const [brand, setBrand] = React.useState();
  const [sortedProducts, setSortedProducts] = React.useState(products);
  const [CurrentURLhandle, setCurrentURLhandle] = React.useState();
  React.useEffect(() => {
    setCurrentURLhandle(window.location.pathname.replace('/products/', ''));
  }, [CurrentURLhandle]);
  var tags = [];
  var backToTags = [];

  products
    .map(product => product.tags[0])
    .map(tag => {
      tags.push(tag);
      const uniqueTags = new Set(tags);
      backToTags = [...uniqueTags];
      return true;
    });

  const handleTags = tag => {
    navigate(`/products/${tag}`);
  };

  const handleVendor = event => {
    setBrand(event.target.innerText);
  };

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

  const handleSort = event => {
    if (event.target.value === 'hightToLow') {
      var sortedArray = products
        .filter(prod => prod.tags[0] === CurrentURLhandle)
        .sort(function (a, b) {
          return (
            b.priceRange.minVariantPrice.amount -
            a.priceRange.minVariantPrice.amount
          );
        });
      setSortedProducts(sortedArray);
    } else if (event.target.value === 'Sort') {
      setSortedProducts(products);
    } else if (event.target.value === 'lowToHigh') {
      sortedArray = products
        .filter(prod => prod.tags[0] === CurrentURLhandle)
        .sort(function (a, b) {
          return (
            a.priceRange.minVariantPrice.amount -
            b.priceRange.minVariantPrice.amount
          );
        });
      setSortedProducts(sortedArray);
    }
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
  var pructsTag = CurrentURLhandle
    ? sortedProducts.filter(product => product.tags[0] === CurrentURLhandle)[0]
        .tags[0]
    : '';
  var TrackedCollection = CurrentURLhandle
    ? collections.find(collection =>
        collection.products.find(prod => prod.tags[0] === pructsTag)
      ).handle
    : '';

  return (
    <Layout>
      <TagsTrack>
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
        <div>{CurrentURLhandle}</div>
      </TagsTrack>
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
              {backToTags?.map((tag, i) => (
                <span key={i}>
                  <div onClick={() => handleTags(tag)} role="presentation">
                    {tag}
                  </div>
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
              {uniqueVendors.map((vendor, i) => (
                <span key={i}>
                  <div onClick={handleVendor} role="presentation">
                    {vendor}
                  </div>
                  <div>
                    (
                    {
                      products.filter(
                        product =>
                          product.vendor === vendor &&
                          product.tags[0] === CurrentURLhandle
                      ).length
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
            <select onChange={handleSort}>
              <option value={'Sort'}>Sort</option>
              <option value={'lowToHigh'}>Price low-to-high</option>
              <option value={'hightToLow'}>Price hight-to-low</option>
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
            {sortedProducts
              .filter(product =>
                product.tags[0] === CurrentURLhandle && brand
                  ? product.vendor === brand
                  : product.tags[0] === CurrentURLhandle
              )
              .map((p, i) => (
                <Prod tile={tileView} key={i}>
                  <Text tile={tileView}>
                    <ProdName onClick={() => MoveToSinglePruduct(p)}>
                      {p.title}
                    </ProdName>
                    <ProdVariant>
                      {sortedProducts.find(product => product.title === p.title)
                        .variants[0].title === 'Default Title'
                        ? 'Default Title'
                        : sortedProducts.find(
                            product => product.title === p.title
                          ).variants[0].title}
                    </ProdVariant>
                    <ProdDescription tile={tileView}>
                      {p.description}
                    </ProdDescription>
                    <div>Reviews</div>
                  </Text>

                  <ProdImage tile={tileView}>
                    <img
                      src={
                        sortedProducts.find(
                          product => product.title === p.title
                        ).images[0].originalSrc
                      }
                      alt=" "
                    />
                  </ProdImage>
                  <QuantityNPrice tile={tileView}>
                    <PriceNReview tile={tileView}>
                      <div>Reviews</div>
                      <Price tile={tileView}>
                        <ProdPrice>
                          Now £
                          {
                            sortedProducts.find(
                              product => product.title === p.title
                            ).variants[0].price
                          }
                        </ProdPrice>
                        <OriginalPrice>
                          {sortedProducts.find(
                            product => product.title === p.title
                          ).variants[0].compareAtPriceV2 ? (
                            sortedProducts.find(
                              product => product.title === p.title
                            ).variants[0].compareAtPriceV2.amount
                          ) : (
                            <div></div>
                          )}
                        </OriginalPrice>
                      </Price>
                    </PriceNReview>
                    <CartOption>
                      {sortedProducts.find(product => product.title === p.title)
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
