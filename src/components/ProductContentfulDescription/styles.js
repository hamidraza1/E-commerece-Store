import styled from 'styled-components';

export const Wrapper = styled.div`
  background: white;
  margin-top: 30px;
`;

export const Info = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
export const Info2 = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Titles2 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #d8d8d8;
  > svg {
    color: rgb(96, 109, 117);
  }
`;
export const Descriptions2 = styled.div`
  padding: 10px;
  text-align: justify;
`;
export const RecentViewedWrapper = styled.div`
  background: white;
  > h4 {
    text-align: center;
    width: 90%;
    margin: 20px auto;
    color: #00b034;
    padding: 20px 0;
    border-bottom: 1px solid #00b034;
  }
`;

export const Titles = styled.div`
  display: flex;
  justify-content: space-evenly;

  > div {
    padding: 15px 0;
    background: #00b034;
    color: white;
    text-align: center;
    width: 100%;
    margin-left: 1px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    &:hover {
      background: white;
      color: #00b034;
    }
    &.active {
      background: white;
      color: #00b034;
    }
  }
`;
export const Descriptions = styled.div`
  padding: 20px;
  font-size: 14px;
  text-align: justify;
`;
