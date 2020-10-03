import styled from 'styled-components';

export const MyItems = styled.div`
  background: white;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
`;
export const Btns = styled.div`
  display: flex;
  border-bottom: 1px solid #d8d8d8;
  padding: 30px;

  > div:first-child {
    padding: 10px;
    background: rgb(0, 153, 153);
    color: white;
    border-radius: 5px;
    margin-right: 10px;
    margin-left: auto;
  }
  > div:last-child {
    padding: 10px;
    background: rgb(232, 3, 91);
    color: white;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

export const CartItem = styled.div`
  background: white;
  border-bottom: 1px solid #d8d8d8;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  padding: 15px 10px;
  border-radius: 5px;

  @media (min-width: 375px) {
    grid-template-columns: 1fr 2fr 2fr 1fr 1fr;
  }
  > img {
    width: 50px;
    height: 50px;
    display: none;
    @media (min-width: 375px) {
      display: block;
    }
  }
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div:first-child {
    color: rgb(0, 153, 153);
    font-weight: bold;
  }
`;
export const QuantityAdjusterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 153, 153);
`;
export const Del = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(179, 176, 181);
`;
export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
`;
export const Total = styled.div`
  display: flex;
  padding: 10px 20px;
  padding-left: 10px;
  justify-content: space-between;
`;
export const Bin = styled.div`
  > span:first-child {
    color: rgb(0, 153, 153);
    margin-right: 10px;
  }
  > span:last-child {
    color: black;
  }
`;
export const TotalPrice = styled.div`
  color: black;
  font-weight: bold;
  > span {
    margin-left: 10px;
    color: rgb(0, 153, 153);
  }
`;
