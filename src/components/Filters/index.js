import React from 'react';
import ProductContext from 'context/ProductContext';
import { CategoryFilterItem } from './CategoryFilterItem';
import { PriceFilterItem } from './PriceFilterItem';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import {
  FiltersWrapper,
  CategoriesTitle,
  PriceFilterTitle,
  CategoriesOptions,
  PriceFilterOptions,
} from './styles';

export function Filters() {
  const { collections } = React.useContext(ProductContext);
  const [categoriesOptions, setCategoriesOptions] = React.useState(true);
  const [priceFilterOptions, setPriceFilterOptions] = React.useState(true);
  const handleCategoriesMenu = () => {
    setCategoriesOptions(!categoriesOptions);
  };
  const handlePriceFilterMenu = () => {
    setPriceFilterOptions(!priceFilterOptions);
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

  return (
    <FiltersWrapper>
      <CategoriesTitle onClick={handleCategoriesMenu}>
        <span>Categories</span>
        {categoriesOptions ? (
          <MdArrowDropUp size="1.5em" />
        ) : (
          <MdArrowDropDown size="1.5em" />
        )}
      </CategoriesTitle>

      <CategoriesOptions
        variants={container}
        initial="hidden"
        animate={categoriesOptions ? 'show' : 'hidden'}
        style={{ originY: '0' }}
      >
        {collections.map(collection => (
          <CategoryFilterItem
            title={collection.title}
            key={collection.shopifyId}
            id={collection.shopifyId}
          />
        ))}
      </CategoriesOptions>
      <PriceFilterTitle onClick={handlePriceFilterMenu}>
        <span>Prices Filter</span>{' '}
        {priceFilterOptions ? (
          <MdArrowDropUp size="1.5em" />
        ) : (
          <MdArrowDropDown size="1.5em" />
        )}
      </PriceFilterTitle>
      <PriceFilterOptions
        variants={container}
        initial="hidden"
        animate={priceFilterOptions ? 'show' : 'hidden'}
        style={{ originY: '0' }}
      >
        <PriceFilterItem />
      </PriceFilterOptions>
    </FiltersWrapper>
  );
}
