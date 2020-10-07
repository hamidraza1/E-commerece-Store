import React from 'react';
import { Checkbox } from 'components';
import { navigate, useLocation } from '@reach/router';
import {
  PriceFilterItemWrapper,
  PriceFilterItemInner,
  LessThanFiveDiv,
  FiveToTenDiv,
  MoreThanTenDiv,
} from './styles';
import queryString from 'query-string';

export function PriceFilterItem() {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const [lessThanFive, setLessThanfive] = React.useState(false);
  const [fiveToTen, setfiveToTen] = React.useState(false);
  const [moreThanTen, setmoreThanTen] = React.useState(false);
  const c = queryString.parse(search)?.c || '';
  const searchTerm = qs.s;
  const priceFilter = qs.p;

  let navigateTo = '/all-products';

  const LessThanFive = () => {
    setLessThanfive(!lessThanFive);
    if (fiveToTen) {
      setfiveToTen(!fiveToTen);
    }
    if (moreThanTen) {
      setmoreThanTen(!moreThanTen);
    }
    if (!lessThanFive) {
      navigate(`${navigateTo}?p=less-than-5`);
    }
    if (lessThanFive) {
      navigate(`${navigateTo}`);
    }
  };
  const FiveToTen = () => {
    setfiveToTen(!fiveToTen);
    if (lessThanFive) {
      setLessThanfive(!lessThanFive);
    }
    if (moreThanTen) {
      setmoreThanTen(!moreThanTen);
    }
    if (!fiveToTen) {
      navigate(`${navigateTo}?p=five-To-ten`);
    }

    if (fiveToTen) {
      navigate(`${navigateTo}`);
    }
  };
  const MoraThanTen = () => {
    setmoreThanTen(!moreThanTen);
    if (lessThanFive) {
      setLessThanfive(!lessThanFive);
    }
    if (fiveToTen) {
      setfiveToTen(!fiveToTen);
    }
    if (!moreThanTen) {
      navigate(`${navigateTo}?p=more-than-10`);
    }
    if (moreThanTen) {
      navigate(`${navigateTo}`);
    }
  };

  return (
    <PriceFilterItemWrapper>
      <PriceFilterItemInner>
        <LessThanFiveDiv onClick={LessThanFive}>
          <Checkbox checked={lessThanFive} />
          <div>less than 5</div>
        </LessThanFiveDiv>
        <FiveToTenDiv onClick={FiveToTen}>
          <Checkbox checked={fiveToTen} />
          <div>5-10</div>
        </FiveToTenDiv>
        <MoreThanTenDiv onClick={MoraThanTen}>
          <Checkbox checked={moreThanTen} />
          <div>more than 10</div>
        </MoreThanTenDiv>
      </PriceFilterItemInner>
    </PriceFilterItemWrapper>
  );
}
