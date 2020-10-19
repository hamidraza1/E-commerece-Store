import styled from 'styled-components';

export const HomePageVideoWrapper = styled.div`
  margin-top: 100px;
  cursor: pointer;
  @media (min-width: 425px) {
    margin-top: 60px;
  }
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  > video {
    width: 100%;
    border: 1px solid #d8d8d8;
  }
`;
