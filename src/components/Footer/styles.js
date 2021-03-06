import styled from 'styled-components';

export const FooterInnerOne = styled.div`
  width: 100%;

  > div {
    width: 100%;
    max-width: 1200px;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }
  }
`;

export const FooterLogo = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  color: white;
  > div {
    display: flex;
    > div {
      margin-right: 20px;
    }
    > div:first-child {
      margin-left: 20px;
    }
  }
`;
export const BottomImg = styled.div`
  margin-top: 30px;
  cursor: pointer;
  text-align: center;
  @media (min-width: 768px) {
    margin-right: 30px;
    margin-top: 0px;
  }
  > img {
    width: 70px;
    height: 70px;
  }
  > div {
    font-size: 12px;
  }
`;

export const FooterWrapper = styled.div`
  border-top: 0;
  background: white;
  @media (min-width: 768px) {
    border-top: 1px solid #00b034;
  }

  > div:last-child {
    margin-top: 40px;
    width: 100%;
    background: #00b034;

    > div:last-child {
      background: #048229;
      color: white;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      > span {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        @media (min-width: 768px) {
          justify-content: start;
          align-items: start;
          margin-left: 30px;
        }

        > div:first-child {
          font-size: 12px;
        }
        > div:last-child {
          > span {
            cursor: pointer;

            font-size: 12px;
          }
        }
      }
    }
  }
`;
