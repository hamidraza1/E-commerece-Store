import React from 'react';
import {
  SearchTermSection,
  ProductsGridWrapper,
  SearchedProductsWrapper,
  SetView,
} from './styles';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { AiOutlineBars } from 'react-icons/ai';
import { ProductTile } from '../ProductTile';

export function ProductsGrid({ products, searchTerm }) {
  const [tileView, setTileView] = React.useState(true);
  const handleGridView = () => {
    if (!tileView) {
      setTileView(!tileView);
    }
  };
  const handleTileView = () => {
    if (tileView) {
      setTileView(!tileView);
    }
  };
  return (
    <ProductsGridWrapper>
      <SearchTermSection>Search Results for "{searchTerm}"</SearchTermSection>
      <SetView>
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
      </SetView>
      <SearchedProductsWrapper tileView={tileView}>
        {products.map(product => (
          <ProductTile
            tileView={tileView}
            handle={product.handle}
            minPrice={product.priceRange.minVariantPrice.amount}
            description={product.description}
            available={product.variants[0].availableForSale}
            variantId={product.variants[0].shopifyId}
            variantTitle={product.variants[0].title}
            comparePrice={product.variants[0].compareAtPriceV2.amount}
            imageFluid={product.images[0].localFile.childImageSharp.fluid}
            title={product.title}
            key={product.shopifyId}
          />
        ))}
      </SearchedProductsWrapper>
    </ProductsGridWrapper>
  );
}
