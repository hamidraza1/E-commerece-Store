import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: block;
  margin: 40px 0;
  @media (min-width: 768px) {
    display: block;
    margin: 0;
  }
`;
export const BannerImage = styled.div`
  width: 100%;
  padding-bottom: 30%;
  position: relative;
  > img {
    position: absolute;

    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export const BannerButtons = styled.div`
  display: flex;
  border: 1px solid white;
  background: white;
  color: #00b034;
  font-size: 14px;
  width: 99.5%;
  .active {
    background: #00b034;
    color: white;
  }
  > div {
    font-size: 7px;
    padding: 5px 0;
    border-right: 1px solid #00b034;
    width: 25%;
    text-align: center;
    cursor: pointer;
    &:hover {
      background: #00b034;
      color: white;
    }
    @media (min-width: 425px) {
      font-size: 9px;
      padding: 10px 0;
    }
    @media (min-width: 560px) {
      font-size: 12px;
      padding: 13px 0;
    }
    @media (min-width: 768px) {
      font-size: 13px;
      padding: 15px 0;
    }
    @media (min-width: 1024px) {
      font-size: 15px;
      padding: 20px 0;
    }
  }
  > div:last-child {
    border-right: 0;
  }
`;
