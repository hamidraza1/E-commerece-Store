import styled from 'styled-components';

export const RecentViewedProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductWrapper = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  padding: 10px;

  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 60px;
  @media (min-width: 768px) {
    border-right: 1px solid #d8d8d8;
    border-bottom: 0;
  }
`;
export const Title = styled.div`
  text-align: center;
`;
export const MainImage = styled.div`
  text-align: center;
  > img {
    width: 100px;
    height: 100px;
    padding: 40px;
  }
`;
export const PriceNReview = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Price = styled.div``;
export const Review = styled.div``;
export const ProductQuantityAdderWrapper = styled.div``;
