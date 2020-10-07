import styled from 'styled-components';

export const HoveredTagsNProd = styled.div`
  display: ${props => (props.displayHovered ? 'flex' : 'none')};
  position: absolute;
  z-index: 10;
  background: white;
  top: 55px;
  left: 20px;
  width: 96%;
`;
export const HoveredTagsWrapper = styled.div`
  > div:first-child {
    color: rgb(0, 158, 158);
    font-size: 16px;
    padding: 10px 10px;
    font-weight: 600;
    border-bottom: 1px solid #d8d8d8;
  }

  display: inline-flex;
  flex-direction: column;
  width: 20%;
  border-right: 1px solid #d8d8d8;
`;
export const HoveredTags = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid #d8d8d8;
    font-size: 15px;
  }
`;
export const HoveredProductsWrapper = styled.div`
  > div:first-child {
    color: black;
    font-size: 16px;
    padding: 10px 10px;
    font-weight: 600;
    border-bottom: 1px solid #d8d8d8;
  }
  display: inline-flex;
  flex-direction: column;
  width: 40%;
  padding: 0 20px;
`;
export const HoveredProducts = styled.div``;
export const TopOffers = styled.div`
  display: inline-flex;
  width: 40%;
`;
