import styled from 'styled-components';

export const TagDescriptionWrapper = styled.div`
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  > h3 {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    color: rgb(29, 165, 165);
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    @media (min-width: 768px) {
      width: 20%;
      font-size: 24px;
    }
  }
  > p {
    font-size: 12px;
    line-height: 23px;
    width: 100%;
    @media (min-width: 768px) {
      width: 80%;
      font-size: 14px;
    }
  }
`;
