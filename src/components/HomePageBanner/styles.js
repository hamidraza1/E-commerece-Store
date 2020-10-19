import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
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
  width: 100%;
  .active {
    background: #00b034;
    color: white;
  }
  > div {
    padding: 20px 0;
    border-right: 1px solid #00b034;
    width: 25%;
    text-align: center;
    cursor: pointer;
    &:hover {
      background: #00b034;
      color: white;
    }
  }
  > div:last-child {
    border-right: 0;
  }
`;
