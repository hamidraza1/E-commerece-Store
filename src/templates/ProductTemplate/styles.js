import styled from 'styled-components';

export const ProdTrack = styled.section`
  display: flex;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 20px;
  color: #00b034;
  font-size: 14px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  > div:nth-child(1) {
    cursor: pointer;
    &:hover {
      color: rgb(1, 92, 92);
    }
  }
  > div:nth-child(3) {
    cursor: pointer;
    color: black;
    &:hover {
      color: green;
    }
  }
  > div:nth-child(5) {
    cursor: pointer;
    color: black;
    &:hover {
      color: green;
    }
  }
  > div:nth-child(7) {
    color: black;
  }
  > svg {
    margin-top: 4px;
  }
`;
export const Grid = styled.section`
  margin-top: 20px;
  background: white;
  position: relative;
`;
export const InfoNImg = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 20px;
  width: 90%;
  border-bottom: 1px solid rgb(231, 234, 236);
  margin: 0 auto;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const AllInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Heading1 = styled.div`
  h4 {
    margin: 10px 0;
    font-size: 22px;
    color: rgb(0, 153, 153);
  }
  p {
    font-size: 14px;
    margin-top: -3px;
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Heading2 = styled.div`
  display: none;
  h4 {
    margin: 10px 0;
    font-size: 22px;
    color: #00b034;
  }
  p {
    font-size: 14px;
    margin-top: -3px;
  }
  @media (min-width: 768px) {
    display: block;
    margin-bottom: 10px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 50px;
  }
`;
export const ReviewNLogo = styled.div`
  display: none;

  justify-content: space-between;
  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 10px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 50px;
  }
`;
export const PriceNSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PriceNQuantity = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  align-items: center;
  > div {
    width: 100%;
  }
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 50px;
  }
`;
export const ReducedPrice = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: rgb(232, 3, 91);
  margin-bottom: 10px;
`;
export const OriginalPrice = styled.div`
  text-decoration: line-through;
  display: none;
`;

export const AllImgs = styled.div``;
export const DescrptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const StockNNote = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 30px;
  @media (min-width: 768px) {
    padding: 20px;
  }
`;
export const StockNno = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 0;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  > div:first-child {
    color: #00b034;
  }
`;
export const Note = styled.div`
  background: #02e344;
  color: white;
  margin: 10px 0;
  padding: 8px;
  font-size: 12px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
export const Descrption = styled.div`
  width: 50%;
  margin: 15px 0;
  padding-left: 30px;
  font-size: 14px;
  @media (min-width: 768px) {
    padding: 20px;
    margin: 15px 0;
  }
`;

export const SelectWrapper = styled.div`
  margin-top: 20px;
  > div {
    display: block;
    font-size: 14px;
  }
  > select {
    margin-top: 5px;
    width: 100%;
    background: rgb(246, 241, 239);
    padding: 5px 10px;
    font-size: 14px;
    > option {
    }
  }
`;
