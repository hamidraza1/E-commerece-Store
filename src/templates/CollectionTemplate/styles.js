import styled from 'styled-components';

export const CollectionTrack = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
  margin-bottom: 20px;
  color: #00b034;
  > div:first-child {
    cursor: pointer;
    &:hover {
      color: #00b034;
    }
  }
  > div :last-child {
    font-size: 14px;
    color: black;
  }
`;
export const CollectionTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Description = styled.div`
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 0px 1px 3px rgba(0, 153, 153, 0.5);
`;
export const CollectionBanner = styled.div`
  border: ;
  width: 100%;
  height: auto;
`;
export const TagProd = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    box-shadow: 0px 1px 3px rgba(0, 153, 153, 0.5);
  }
  > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      width: 75%;
    }
    > span {
      background: white;
      padding: 20px;
      border: 1px solid #00b034;

      color: #00b034;
    }
  }
`;
export const TagNamesWrapper = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 153, 153, 0.5);
  background: white;
  width: 100%;
  border-right: 1px solid #00b034;

  padding-bottom: 20px;
  @media (min-width: 768px) {
    width: 25%;
  }

  > h4 {
    font-size: 16px;
    color: #00b034;
    border-bottom: 1px solid #00b034;
    margin: 15px;
    padding: 12px 0;
  }
`;
export const TagNames = styled.div`
  margin: 10px 10px;
  color: rgb(71, 71, 71);
  cursor: pointer;
  &:hover {
    color: rgb(0, 158, 158);
  }
`;
export const TagNamesPicturesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  background: white;
  @media (min-width: 570px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const TagNamePic = styled.div`
  border-bottom: 1px solid #00b034;
  border-right: 1px solid #00b034;

  background: white;
  > div:nth-child(1) {
    font-size: 16px;
    font-weight: 600;
    color: #00b034;
    margin: 10px 15px;
    cursor: pointer;
    display: inline-block;
  }
  > div:nth-child(2) {
    margin: 6px 15px;
    font-size: 12px;
    color: rgb(71, 71, 71);
  }
  > div:nth-child(3) {
    padding: 30px;
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
    width: 200px;
    height: 200px;
    > img {
      width: 200px;
      height: 200px;
    }
  }
`;
export const ShopNowBtn = styled.div`
  display: inline-flex;
  padding: 10px 15px;
  font-size: 14px;
  background: #00b034;
  color: white;
  border-radius: 5px;
  float: right;
  margin-right: 15px;
  margin-bottom: 25px;
  cursor: pointer;
`;
