import styled from 'styled-components';

export const CartWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
  text-decoration: none;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  > svg {
    margin: auto 0;
    color: #00b034;
    @media (min-width: 768px) {
      color: white;
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: ;
    flex-wrap: wrap;
    gap: 5px;
    padding-left: ;
    margin: auto 0;
    color: #00b034;
    @media (min-width: 768px) {
      color: white;
    }
    > span:last-child {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      color: white;
      background: #00b034;
      height: 28px;
      width: 28px;
      border-radius: 50%;
      text-align: center;
      @media (min-width: 768px) {
        color: #00b034;
        background: white;
      }
    }
  }
`;
