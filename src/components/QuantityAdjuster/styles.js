import styled from 'styled-components';

export const QuantityAdjusterWrapper = styled.div`
  display: flex;
  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid rgb(0, 153, 153);
  }
  > div:last-child {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    font-weight: bold;
    color: rgb(0, 153, 153);
  }
`;
export const AdjusterButton = styled.div`
  cursor: pointer;
`;
