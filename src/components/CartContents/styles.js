import styled from 'styled-components';

export const CartContentsWrapper = styled.div`
  > h2 {
    text-align: center;
    color: rgb(0, 153, 153);
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
      margin-right: 10px;
    }
  }
`;
export const CartItem = styled.div`
  background: white;
  border-bottom: 1px solid #d8d8d8;

  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  padding: 15px 10px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
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

export const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const MyItems = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 48%;
  }
  > h4 {
    border-bottom: 1px solid rgb(0, 153, 153);
    padding-bottom: 10px;
  }
  > p {
    font-weight: bold;
    margin-bottom: 5px;
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
`;
export const OrderTotalWrapper = styled.div`
  width: 100%;
  margin-top: 70px;
  @media (min-width: 768px) {
    width: 48%;
    margin-top: 0;
  }

  > h4 {
    border-bottom: 1px solid rgb(0, 153, 153);
    padding-bottom: 10px;
  }
`;
export const OrderTotal = styled.div`
  background: white;
  margin-top: 20px;
  padding: 20px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    margin-top: 45px;
  }
`;
export const BasketTotal = styled.div`
  padding-bottom: 15px;
  border-bottom: 2px solid #d8d8d8;
  display: flex;
  justify-content: space-between;
`;
export const Savings = styled.div`
  padding-top: 15px;
  padding-bottom: 5px;
  > div:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  > div:nth-child(2) {
    font-size: 12px;
    text-decoration: underline;
    margin-bottom: 3px;
    cursor: pointer;
    display: inline-flex;
  }
  > div:nth-child(3) {
    font-size: 12px;
  }
`;
export const CheckoutBtn = styled.div`
  padding: 15px;
  background: rgb(232, 3, 91);
  margin-top: 20px;
  font-size: 22px;
  text-align: center;
  color: white;
  border-radius: 3px;
`;
export const HelpWrapper = styled.div`
  margin-top: 40px;
  background: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 150px;
  }
`;
export const SecureCheckout = styled.div`
  display: felx;
  font-size: 20px;
  width: 100%;
  @media (min-width: 768px) {
    width: 45%;
  }
  > div {
    margin-right: 10px;
    color: rgb(0, 153, 153);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > span {
    > div:first-child {
      color: rgb(0, 153, 153);
    }
    > div:last-child {
      font-size: 14px;
    }
  }
`;
export const Returns = styled.div`
  display: flex;
  margin-top: 50px;
  font-size: 20px;
  width: 100%;
  @media (min-width: 768px) {
    margin-top: 0;
    width: 45%;
  }
  > div {
    margin-right: 10px;
    color: rgb(0, 153, 153);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > span {
    > div:first-child {
      color: rgb(0, 153, 153);
    }
    > div:last-child {
      font-size: 14px;
    }
  }
`;
