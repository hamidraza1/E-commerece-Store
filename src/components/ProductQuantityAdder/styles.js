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
  background: rgb(48, 109, 76);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 10px;
  margin-left: ;
  width: 100%;
`;
export const IncrementBtn = styled.div`
  background: rgb(231, 234, 236);
  padding: 4px 0;
  color: rgb(76, 79, 90);
  font-size: 26px;
  font-weight: bold;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 25%;
`;
export const DecrementBtn = styled.div`
  background: rgb(231, 234, 236);
  padding: 4px 0;
  color: rgb(168, 178, 184);
  font-size: 26px;
  font-weight: bold;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 25%;
`;
