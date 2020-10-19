import styled from 'styled-components';

export const HoveredTagsSectionWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: ${props => (props.displayHovered ? 'flex' : 'none')};
  }

  flex-direction: column;
  position: absolute;
  z-index: 10;
  top: 37px;
  left: 20px;
  background: white;
  width: 96%;
  border-radius: 5px;
  &::after {
    content: '';
    z-index: 20000;
    position: absolute;
    top: 0px;
    margin-top: -8px;
    left: ${props => (props.index === 0 ? 10 + 'px' : props.index * 70 + 'px')};
    background: white;
    width: 15px;
    height: 15px;
    border-top: 1px solid rgb(20, 245, 86);
    border-left: 1px solid rgb(20, 245, 86);
    border-radius: 2px;
    transform: rotate(45deg);
    @media (min-width: 375px) {
      top: 0px;
      right: 0px;
    }
    @media (min-width: 430px) {
      top: 0px;
      right: 0px;
    }
    @media (min-width: 768px) {
      top: ;
      left: ;
    }
  }
`;

export const HoveredTagsNProd = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgb(20, 245, 86);
`;
export const HoveredTagsWrapper = styled.div`
  > div:first-child {
    color: #00b034;
    font-size: 16px;
    padding: 10px 10px;
    font-weight: 600;
    border-bottom: 1px solid rgb(20, 245, 86);
  }

  display: inline-flex;
  flex-direction: column;
  width: 20%;
  border-right: 1px solid rgb(20, 245, 86);
`;
export const HoveredTags = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid rgb(20, 245, 86);
    font-size: 15px;
    &:hover {
      cursor: pointer;
      background: rgb(181, 176, 174);
    }
    > svg {
      color: #00b034;
    }
  }
  > div:last-child {
    border-bottom: none;
  }
`;
export const HoveredProductsWrapper = styled.div`
  > div:first-child {
    color: black;
    font-size: 16px;
    padding: 10px 10px;
    font-weight: 600;
    border-bottom: 1px solid rgb(20, 245, 86);
    &:hover {
      cursor: pointer;
      color: green;
    }
  }
  display: inline-flex;
  flex-direction: column;
  width: 37%;
  padding: 0 20px;
`;
export const HoveredProducts = styled.div`
  margin-top: 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: start;
  > div:first-child {
    color: #00b034;
    font-weight: 600;
  }
  > div {
    margin: 6px 10px;
    cursor: pointer;
    display: flex;
    &:hover {
      cursor: pointer;
      color: green;
    }
  }
`;
export const TopOffersWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 37%;
  > div:first-child {
    font-weight: 600;
    border-bottom: 1px solid rgb(20, 245, 86);
    padding: 10px 10px;
  }
`;
export const TopOffers = styled.div`
  margin-top: 20px;
  display: flex;
  > div {
    width: 50%;
  }
`;
export const FanousBrandsLogo = styled.div`
  display: flex;
  padding: 10px;
  > div {
    width: 10%;
    padding: 10px;
  }
`;
