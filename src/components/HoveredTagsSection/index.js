import React from 'react';
import ProductContext from 'context/ProductContext';
import { navigate } from '@reach/router';
import {
  HoveredTagsSectionWrapper,
  HoveredTagsNProd,
  HoveredTagsWrapper,
  HoveredTags,
  HoveredProductsWrapper,
  HoveredProducts,
  TopOffersWrapper,
  TopOffers,
  FanousBrandsLogo,
} from './styles';
import { RiArrowRightSLine } from 'react-icons/ri';

export function HoveredTagsSection({ collecionName, displayHovered }) {
  const { products, collections } = React.useContext(ProductContext);

  const [prodHeading, setProdHeading] = React.useState();
  const [FirstProdArray, setFirstProdArray] = React.useState();
  const [tagsName, setTagsName] = React.useState();
  const [index, setIndex] = React.useState(0);
  var tags = [];
  var backToTags = [];

  React.useEffect(() => {
    collections.forEach((item, i) => {
      if (item.title === collecionName) {
        setIndex(i);
      }
    });

    setFirstProdArray(
      products.filter(prod => prod.tags[0] === backToTags[0]).map(p => p.title)
    );
  }, [collections, collecionName, products]);

  /* let FirstProdArray = collecionName
    ? collections
        .find(collection => collection.title === collecionName)
        .products.filter(
          product =>
            product.tags ===
            collections.find(collection => collection.title === collecionName)
              .products[0].tags[0]
        )
        .map(p => p.title)
    : ''; */

  if (collecionName) {
    collections
      .find(collection => collection.title === collecionName)
      .products.map(product => product);
  }

  const tagOptions = event => {
    let hoveredTag = event.target.innerText;
    setTagsName(
      products
        .filter(prod => prod.tags[0] === event.target.innerText)
        .map(p => p.title)
    );
    setProdHeading(hoveredTag);
  };

  const resetTagsOptions = () => {};
  const moveToProdPage = event => {
    let hoveredProd = event.target.innerText;
    hoveredProd = hoveredProd.replace(/\s+/g, '-').toLowerCase();
    navigate(`/products/${hoveredProd}`);
  };
  let FirstTagTitle = collecionName
    ? collections.find(collection => collection.title === collecionName)
        .products[0].tags[0]
    : '';

  return (
    <HoveredTagsSectionWrapper displayHovered={displayHovered} index={index}>
      <HoveredTagsNProd>
        <HoveredTagsWrapper>
          <div>{collecionName}</div>

          {collecionName
            ? collections
                .find(collection => collection.title === collecionName)
                .products.map(product => {
                  tags.push(...product.tags);
                  const uniqueTags = new Set(tags);
                  backToTags = [...uniqueTags];
                  return true;
                })
            : ''}
          <HoveredTags>
            {tags
              ? backToTags?.map((tag, i) => (
                  <div
                    onMouseEnter={tagOptions}
                    onMouseLeave={resetTagsOptions}
                    key={i}
                    role="presentation"
                  >
                    <div value={tag} key={i}>
                      {tag}
                    </div>
                    <RiArrowRightSLine />
                  </div>
                ))
              : ''}
          </HoveredTags>
        </HoveredTagsWrapper>

        <HoveredProductsWrapper>
          <div>
            {prodHeading ? prodHeading : FirstTagTitle ? FirstTagTitle : ''}
          </div>
          <HoveredProducts>
            <div>
              {prodHeading ? prodHeading : FirstTagTitle ? FirstTagTitle : ''}
            </div>
            {tagsName
              ? tagsName.map((prod, i) => (
                  <div key={i} onClick={moveToProdPage} role="presentation">
                    {prod}
                  </div>
                ))
              : FirstProdArray
              ? FirstProdArray.map((prod, i) => (
                  <div key={i} onClick={moveToProdPage} role="presentation">
                    {prod}
                  </div>
                ))
              : ''}
          </HoveredProducts>
        </HoveredProductsWrapper>
        <TopOffersWrapper>
          <div>Top Healthcare Offers</div>
          <TopOffers>
            <div>Top Offer 1</div>
            <div>Top Offer 2</div>
          </TopOffers>
        </TopOffersWrapper>
      </HoveredTagsNProd>
      <FanousBrandsLogo>
        <div>Logo 1</div>
        <div>Logo 1</div>
        <div>Logo 1</div>
      </FanousBrandsLogo>
    </HoveredTagsSectionWrapper>
  );
}
