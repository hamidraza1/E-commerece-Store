import styled, { css } from 'styled-components';

export const ProductQuantityAdderWrapper = styled.div`
  margin: ;

  > form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > span {
      display: flex;
      margin-bottom: 10px;
      margin-right: 10px;
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
  margin-left: auto;
`;
export const IncrementBtn = styled.div`
  background: rgb(231, 234, 236);
  padding: 4px 14px;
  color: rgb(76, 79, 90);
  font-size: 26px;
  font-weight: bold;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const DecrementBtn = styled.div`
  background: rgb(231, 234, 236);
  padding: 4px 14px;
  color: rgb(168, 178, 184);
  font-size: 26px;
  font-weight: bold;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
