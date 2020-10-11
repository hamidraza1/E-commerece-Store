import React from 'react';
import { Layout, Filters, ProductsGrid, SEO } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

const AllProductsWrapper = styled.div`
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: ;
  margin-top: 20px;
  width: ;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  > span:first-child {
    background: white;
    border-right: 1px solid #d8d8d8;
    width: ;
    @media (min-width: 768px) {
      width: 25%;
    }
  }
  > span:last-child {
    width: ;
    @media (min-width: 768px) {
      width: 75%;
    }
  }
`;

export default function AllProducts() {
  const { products, collections } = React.useContext(ProductContext);
  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const selectedCollectionIdsMap = {};
  const searchTerm = qs.s;
  const priceFilter = qs.p;

  selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  if (collections) {
    collections.forEach(collection => {
      collectionProductMap[collection.shopifyId] = {};

      collection.products.forEach(product => {
        collectionProductMap[collection.shopifyId][product.shopifyId] = true;
      });
    });
  }

  const filterByCategory = product => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (let key in selectedCollectionIdsMap) {
        if (collectionProductMap[key]?.[product.shopifyId]) {
          return true;
        }
      }
      return false;
    }

    return true;
  };

  const filterBySearchTerm = product => {
    if (searchTerm) {
      return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    }
    return true;
  };

  const filterByPriceRange = product => {
    if (!!priceFilter && priceFilter === 'less-than-5') {
      if (Number(product.priceRange.minVariantPrice.amount) < 5) {
        return true;
      }
    }
    if (!!priceFilter && priceFilter === 'five-To-ten') {
      if (
        Number(product.priceRange.minVariantPrice.amount) >= 5 &&
        Number(product.priceRange.minVariantPrice.amount) <= 10
      ) {
        return true;
      }
    }
    if (!!priceFilter && priceFilter === 'more-than-10') {
      if (Number(product.priceRange.minVariantPrice.amount) > 10) {
        return true;
      }
    }
    if (!priceFilter) {
      return true;
    }
  };

  const filteredProducts = products
    .filter(filterByCategory)
    .filter(filterByPriceRange)
    .filter(filterBySearchTerm);

  return (
    <Layout>
      <SEO description="Manchester Chemist all products" title="All Products" />
      <AllProductsWrapper>
        {/* {!!searchTerm && !!filteredProducts && (
          <h3>
            Search term: <strong>'{searchTerm}'</strong>
          </h3>
        )} */}
        {!!filteredProducts.length && (
          <h4>{filteredProducts.length} Products</h4>
        )}

        <Content>
          <span>
            <Filters />
          </span>

          <span>
            {!filteredProducts.length && (
              <div>
                <h3>
                  <span>ohh No , Nothing matches</span>
                  &nbsp;
                  <strong>'{searchTerm}'</strong>
                </h3>
                <div>To help with search why not try:</div>
                <br />
                <br />
                <ul>
                  <li>checking your spelling</li>
                </ul>
              </div>
            )}

            {!!filteredProducts.length && (
              <div>
                <ProductsGrid
                  products={filteredProducts}
                  searchTerm={searchTerm}
                />
              </div>
            )}
          </span>
        </Content>
      </AllProductsWrapper>
    </Layout>
  );
}
