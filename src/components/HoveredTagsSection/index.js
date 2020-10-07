import React from 'react';
import ProductContext from 'context/ProductContext';
import {
  HoveredTagsSectionWrapper,
  HoveredTagsNProd,
  HoveredTagsWrapper,
  HoveredTags,
  HoveredProductsWrapper,
  HoveredProducts,
  TopOffers,
} from './styles';
import { RiArrowRightSLine } from 'react-icons/ri';
export function HoveredTagsSection({
  collecionName,
  displayHovered,
  setDisplayHovered,
}) {
  const { products, collections } = React.useContext(ProductContext);

  const [prodHeading, setProdHeading] = React.useState();
  const [tagsName, setTagsName] = React.useState();
  var tags = [];
  var backToTags = [];

  let FirstProdArray = collecionName
    ? collections
        .find(collection => collection.title === collecionName)
        .products.filter(
          product =>
            product.tags ==
            collections.find(collection => collection.title === collecionName)
              .products[0].tags[0]
        )
        .map(p => p.title)
    : '';

  if (collecionName) {
    collections
      .find(collection => collection.title === collecionName)
      .products.map(product => product);
  }

  const tagOptions = event => {
    let hoveredTag = event.target.innerText;

    setTagsName(
      products.filter(prod => prod.tags == hoveredTag).map(p => p.title)
    );
    setProdHeading(hoveredTag);
  };

  let FirstTagTitle = collecionName
    ? collections.find(collection => collection.title === collecionName)
        .products[0].tags[0]
    : '';

  return (
    <HoveredTagsNProd displayHovered={displayHovered}>
      <HoveredTagsWrapper>
        <div>{collecionName}</div>

        {collecionName
          ? collections
              .find(collection => collection.title === collecionName)
              .products.map(product => {
                tags.push(...product.tags);
                const uniqueTags = new Set(tags);
                backToTags = [...uniqueTags];
              })
          : ''}
        <HoveredTags>
          {tags
            ? backToTags?.map((tag, i) => (
                <div>
                  <div value={tag} key={i} onMouseEnter={tagOptions}>
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
          {tagsName
            ? tagsName.map((prod, i) => <div key={i}>{prod}</div>)
            : FirstProdArray
            ? FirstProdArray.map((prod, i) => <div key={i}>{prod}</div>)
            : ''}
        </HoveredProducts>
      </HoveredProductsWrapper>
      <TopOffers></TopOffers>
    </HoveredTagsNProd>
  );
}
