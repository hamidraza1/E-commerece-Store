import styled from 'styled-components';

export const ProductQuantityAdderWrapper = styled.div`
  margin: ;

  > div {
    display: flex;
    flex-direction: column;
    flex-wrap: ;
    justify-content: ;
    text-align: center;
    > span {
      display: flex;
      margin-bottom: 10px;
      > span {
        width: 50%;
      }
    }
  }
`;

export const AddToCartButton = styled.button`
  border: 0;
  background: #038529;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 10px;
  margin-left: ;
  width: 100%;
  cursor: pointer;
`;
export const IncrementBtn = styled.div`
  background: #a7f2bd;
  padding: 4px 0;
  color: #00b034;
  font-size: 26px;
  font-weight: bold;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 25%;
  cursor: pointer;
`;
export const DecrementBtn = styled.div`
  background: #a7f2bd;
  padding: 4px 0;
  color: #00b034;
  font-size: 26px;
  font-weight: bold;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 25%;
  cursor: pointer;
`;
