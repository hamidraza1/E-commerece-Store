import styled from 'styled-components';

export const ProductsGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SearchedProductsWrapper = styled.div`
  display: ${props => (props.tileView ? 'grid' : 'flex')};
  flex-direction: column;
  background: white;
  grid-template-columns: 1fr;
  @media (min-width: 384px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export const SetView = styled.div`
  background: white;
  border-bottom: 1px solid #00b034;

  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > select {
    background: #a7f2bd;
    padding: 5px;
    border: none;
    border-radius: 5px;
    width: 150px;
    cursor: pointer;
    &:hover {
      background: rgb(182, 185, 187);
      color: white;
    }
    > option {
      background: white;
      color: black;
    }
  }
  > div:last-child {
    display: none;
    @media (min-width: 768px) {
      display: inline-flex;
    }
    > div {
      margin-left: 10px;
      color: #00b034;
      cursor: pointer;
      &:hover {
        color: rgb(30, 74, 74);
      }
    }
  }
`;
export const SearchTermSection = styled.div`
  font-size: 20px;
  color: #00b034;
  background: white;
  padding: 30px;
  border-bottom: 1px solid #00b034;
`;
