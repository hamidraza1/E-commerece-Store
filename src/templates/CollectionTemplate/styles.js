import styled from 'styled-components';

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
  border: 1px solid purple;
  width: 100%;
  height: 100px;
`;
export const TagProd = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
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
      border: 1px solid #d8d8d8;

      color: #099;
    }
  }
`;
export const TagNamesWrapper = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 153, 153, 0.5);
  background: white;
  width: 100%;

  padding-bottom: 20px;
  @media (min-width: 768px) {
    width: 25%;
  }

  > h4 {
    font-size: 16px;
    color: #099;
    border-bottom: 1px solid #d8d8d8;
    padding: 15px 0;
    padding-left: 8px;
  }
`;
export const TagNames = styled.div`
  margin: 10px 10px;
  color: rgb(71, 71, 71);
  cursor: pointer;
`;
export const TagNamesPicturesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: white;
  box-shadow: 1px 0px 2px rgba(0, 153, 153, 0.5);
`;
export const TagNamePic = styled.div`
  border-bottom: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
  border-left: 1px solid #d8d8d8;
  background: white;
  > div:nth-child(1) {
    font-size: 16px;
    color: #099;
    margin: 10px;
  }
  > div:nth-child(2) {
    margin: 10px;
    font-size: 12px;
    color: rgb(71, 71, 71);
  }
  > div:nth-child(3) {
    padding: 30px;

    > img {
      width: 200px;
      height: 200px;
    }
  }
`;
