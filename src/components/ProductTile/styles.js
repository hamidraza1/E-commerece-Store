import styled from 'styled-components';

export const ProductTileWrapper = styled.div`
  border-right: 1px solid #00b034;
  border-bottom: 1px solid #00b034;
  display: flex;
  flex-direction: ${props => (props.tileView ? 'column' : 'row')};

  padding: 10px;
`;

export const Heading = styled.div`
  order: ${props => (props.tileView ? '1' : '2')};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: ${props => (props.tileView ? '100%' : '50%')};
  text-align: ${props => (props.tileView ? 'center' : 'left')};
  margin-left: ${props => (props.tileView ? '0' : '20px')};
`;

export const Title = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const VariantTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-top: 0;
`;
export const Image = styled.div`
  width: 150px;
  height: 150px;
  width: ${props => (props.tileView ? '100%' : '25%')};
  order: ${props => (props.tileView ? '3' : '1')};
  text-align: center;
  margin: 20px 0;
  > img {
    width: 150px;
    height: 150px;
  }
`;
export const Description = styled.div`
  display: ${props => (props.tileView ? 'none' : 'block')};
  order: ${props => (props.tileView ? '4' : '4')};
`;
export const ReviewNPrice = styled.div`
  display: flex;
  justify-content: space-between;
  order: ${props => (props.tileView ? '5' : '5')};
  margin: 20px 0;
`;
export const ReviewTile = styled.div`
  order: ${props => (props.tileView ? '6' : '6')};

  display: ${props => (props.tileView ? 'none' : 'block')};
`;
export const ReviewGrid = styled.div`
  order: ${props => (props.tileView ? '6' : '6')};
  display: ${props => (props.tileView ? 'block' : 'none')};
`;
export const Price = styled.div`
  order: ${props => (props.tileView ? '7' : '7')};
  margin-left: auto;
  font-weight: 600;
  color: green;
`;
export const OriginalPrice = styled.div`
  order: ${props => (props.tileView ? '8' : '8')};
  text-align: right;
  text-decoration: line-through;
`;
export const PriceNQuantity = styled.div`
  width: ${props => (props.tileView ? '100%' : '25%')};
  order: ${props => (props.tileView ? '9' : '9')};
`;
