import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled.div`
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
    color: white;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: ;
    flex-wrap: wrap;
    gap: 5px;
    padding-left: ;
    margin: auto 0;
    color: white;
    > span:last-child {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      color: rgb(232, 3, 91);
      background: white;
      height: 28px;
      width: 28px;
      border-radius: 50%;
      text-align: center;
    }
  }
`;
