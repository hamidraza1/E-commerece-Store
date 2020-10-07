import React from 'react';
import {
  ProductTileWrapper,
  Description,
  Title,
  Price,
  VariantTitle,
  Image,
  ReviewNPrice,
  ReviewTile,
  ReviewGrid,
  OriginalPrice,
  PriceNQuantity,
  Heading,
} from './styles';
import { ProductQuantityAdder } from 'components';

export function ProductTile({
  tileView,
  title,
  imageFluid,
  available,
  variantId,
  comparePrice,
  variantTitle,
  description,
  minPrice,
  handle,
}) {
  console.log(tileView);
  return (
    <ProductTileWrapper tileView={tileView}>
      <Heading tileView={tileView}>
        <Title tileView={tileView}>{title}</Title>
        <VariantTitle tileView={tileView}>{variantTitle}</VariantTitle>
        <Description tileView={tileView}>{description}</Description>
        <ReviewTile tileView={tileView}>Review</ReviewTile>
      </Heading>

      <Image tileView={tileView}>
        <img src={imageFluid.src} />
      </Image>

      <PriceNQuantity tileView={tileView}>
        <ReviewNPrice>
          <ReviewGrid tileView={tileView}>Review</ReviewGrid>
          <Price tileView={tileView}>${minPrice}</Price>
        </ReviewNPrice>
        {/*  <OriginalPrice tileView={tileView}>{comparePrice}</OriginalPrice> */}
        <ProductQuantityAdder
          available={available}
          variantId={variantId}
          tileView={tileView}
        />
      </PriceNQuantity>

      {/* <StyledLink to={`/products/${handle}`}>View Product</StyledLink> */}
    </ProductTileWrapper>
  );
}
