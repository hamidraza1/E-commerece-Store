import styled from 'styled-components';

export const HomePageProductsWrapper = styled.div`
  margin: 50px 0;
  background: white;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
`;
export const ProductGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 425px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export const MainTitle = styled.div`
  text-align: center;
  border-bottom: 1px solid #d8d8d8;
  padding: 10px;
  font-size: 20px;
  color: rgb(0, 158, 158);
  > svg {
    margin: 0 20px;
  }
  @media (min-width: 768px) {
    text-align: start;
  }
`;
export const ProductGrid = styled.div`
  text-align: center;
  border-bottom: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
  padding: 10px 0;
`;
export const Title = styled.div`
  color: rgb(232, 3, 91);
  font-size: 16px;
  font-weight: 600;
`;
export const Variant = styled.div`
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;
export const Image = styled.div`
  width: 100px;
  height: 100px;
  margin: 15px auto;
  > img {
    width: 100px;
    height: 100px;
  }
`;
export const Btn = styled.div`
  display: inline-block;
  background: rgb(232, 3, 91);
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  @media (min-width: 768px) {
    float: right;
    margin-right: 20px;
  }
`;
