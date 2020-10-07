import React from 'react';
/* import { Input } from '../Input'; */
import { Button } from '../Button';
import { FaSearch } from 'react-icons/fa';
import { SearchForm, SearchIcon } from './styles';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export function Search() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const c = queryString.parse(search)?.c || '';
  const priceFilter = qs.p;

  const handleSubmit = e => {
    e.preventDefault();

    if (c && !!priceFilter) {
      navigate(
        `/all-products?s=${encodeURIComponent(
          searchTerm
        )}&c=${encodeURIComponent(c)}&p=${priceFilter}`
      );
    } else if (c && !priceFilter) {
      navigate(
        `/all-products?s=${encodeURIComponent(
          searchTerm
        )}&c=${encodeURIComponent(c)}`
      );
    } else if (!c && !!priceFilter) {
      navigate(
        `/all-products?s=${encodeURIComponent(searchTerm)}&p=${priceFilter}`
      );
    } else {
      navigate(`/all-products?s=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        value={searchTerm}
        onChange={e => setSearchTerm(e.currentTarget.value)}
        placeholder="Search"
      />
      <SearchIcon>
        <Button>
          <FaSearch />
        </Button>
      </SearchIcon>
    </SearchForm>
  );
}
