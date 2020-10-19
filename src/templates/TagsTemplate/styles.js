import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TagsTrack = styled.div`
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
    color: black;
  }
  > svg {
    margin-top: 4px;
  }
`;
export const Description = styled.div``;
export const TagProd = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const CateogoriesSection = styled.div`
  width: 100%;
  background: white;
  margin-bottom: ;

  @media (min-width: 768px) {
    width: 25%;
    margin-bottom: 0;
  }
`;
export const Categories = styled(motion.div)`
  > h4 {
    border-bottom: 1px solid #00b034;
    margin: 6px 10px;
    padding-top: 25px;
    font-size: 18px;
    color: #00b034;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 0;
  }
`;
export const Brands = styled(motion.div)`
  > h4 {
    border-bottom: 1px solid #00b034;
    margin: 6px 10px;
    padding-top: 10px;
    font-size: 18px;
    color: #00b034;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 0;
  }
`;
export const ReviewsCollections = styled(motion.div)`
  > h4 {
    border-bottom: 1px solid #00b034;
    margin: 6px 10px;
    padding-top: 10px;
    font-size: 18px;
    color: #00b034;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 0;
  }
`;
export const Options = styled(motion.div)`
  overflow: hidden;
  font-size: 14px;
  padding: 4px 10px;
  padding-right: 20px;
  > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      margin-bottom: 5px;
      margin-top: 5px;
      cursor: pointer;
    }
  }
`;
export const ProdSection = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  @media (min-width: 768px) {
    width: 75%;
    margin-top: 0;
  }
`;
export const Sort = styled.div`
  border-bottom: 1px solid #00b034;
  border-left: 1px solid #00b034;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > select {
    font-size: 14px;
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
    }
  }
`;
export const ProdGrid = styled.div`
  grid-template-columns: 1fr;

  display: ${props => (props.tile ? 'flex' : 'grid')};
  flex-direction: column;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const Prod = styled.div`
  border-bottom: 1px solid #00b034;
  border-left: 1px solid #00b034;
  border-right: 1px solid #00b034;
  display: flex;
  flex-direction: ${props => (props.tile ? 'row' : 'column')};
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
`;
export const Text = styled.div`
  order: ${props => (props.tile ? '2' : '1')};
  text-align: ${props => (props.tile ? 'start' : 'center')};
  width: ${props => (props.tile ? '45%' : '100%')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  > div:last-child {
    display: ${props => (props.tile ? 'inline-block' : 'none')};
  }
`;

export const ProdName = styled.div`
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    color: rgb(231, 3, 91);
  }
`;
export const ProdVariant = styled.div`
  font-size: 12px;
  font-weight: 600;

  margin-top: ${props => (props.tile ? '-15px' : '0')};
`;
export const ProdDescription = styled.div`
  display: ${props => (props.tile ? 'block' : 'none')};
  font-size: 12px;
`;
export const StockStatus = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const ProdImage = styled.div`
  width: ${props => (props.tile ? '22%' : '100%')};
  width: 150px;
  height: 150px;
  > img {
    width: 150px;
    height: 150px;
  }

  order: ${props => (props.tile ? '1' : '2')};
  @media (min-width: 768px) {
  }
`;
export const QuantityNPrice = styled.div`
  order: ${props => (props.tile ? '3' : '3')};
  width: ${props => (props.tile ? '23%' : '100%')};
  display: flex;
  flex-direction: column;
`;
export const PriceNReview = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  > div:first-child {
    display: ${props => (props.tile ? 'none' : 'inline-block')};
  }
`;
export const Price = styled.div`
  display: inline-block;

  margin-left: auto;
`;
export const ProdPrice = styled.div`
  font-weight: 600;
  color: #00b034;
`;
export const OriginalPrice = styled.div`
  text-decoration: line-through;
  text-align: end;
  > div {
    height: 20px;
    width: 20px;
  }
`;

export const CartOption = styled.div``;
