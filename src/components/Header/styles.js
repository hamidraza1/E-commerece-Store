import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderOuterMostWrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0;
`;
export const HeaderOuterdiv = styled.div`
  background: #099;
`;
export const NavOuterdiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-bottom: solid 1px #d8d8d8;
`;
export const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  box-sizing: border-box;
  flex-wrap: wrap;
  background: #099;
  width: 100%;
  max-width: 1200px;
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
  }
  > div:nth-child(2) {
    order: 3;
    width: 100%;
    background: white;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    @media (min-width: 768px) {
      order: 2;
      width: 30%;
      padding: 0;
      background: #099;
      margin-left: auto;
    }

    > span {
      width: 85%;
      border: 1px solid #099;
      border-radius: 5px;
      @media (min-width: 768px) {
        width: 100%;
      }
    }
  }
  > div:nth-child(3) {
    order: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    padding-right: 10px;
    > button {
      display: none;
    }
    > span:first-child {
      margin-top: -5px;
    }
    @media (min-width: 768px) {
      order: 3;
      > span:first-child {
        display: none;
      }
      > button {
        display: block;
        color: white;
        background: #099;
        padding: 12px;
        border: 1px solid white;
        border-radius: 5px;
        margin-right: 5px;
      }
      > span:last-child {
        background: rgb(232, 3, 91);
        padding: 8px;
        border-radius: 5px;
      }
    }
    > span {
      margin-right: 30px;
      color: white;
    }
  }
`;
export const CartContentsWrapper = styled.div`
  position: fixed;
  top: 100px;
  right: 0px;
  z-index: 3000;
  width: 100%;

  @media (min-width: 430px) {
    top: 50px;
  }
  @media (min-width: 768px) {
    top: 65px;
    right: 20px;
    width: 500px;
  }
`;
export const Triangle = styled.div`
  position: absolute;
  z-index: 1000;
  top: 90px;
  right: 80px;
  background: white;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  @media (min-width: 375px) {
    top: 90px;
    right: 80px;
  }
  @media (min-width: 430px) {
    top: 40px;
    right: 80px;
  }
  @media (min-width: 768px) {
    top: 55px;
    right: 80px;
  }
`;

export const Menu = styled.div`
  display: block;
  height: 20px;
  color: white;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const ShopName = styled.div`
  font-size: 20px;
  font-weight: semi-bold;
  color: white;
  letter-spacing: -1px;
  padding: 20px 10px;
  cursor: pointer;
`;

export const Nav = styled(motion.nav)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const Ul = styled(motion.div)`
  > span:nth-child(1) {
    width: auto;
  }
  > span {
    display: flex;
    margin-right: -5px;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  > div:first-child {
    width: 25px;
  }
  > div:last-child {
    width: 100%;
  }
  overflow: hidden;
  width: 100%;
  position: relative;
  @media (min-width: 768px) {
    height: auto !important;
    display: flex;
    overflow: visible;
    width: 100%;
    background: white;
  }
`;
export const Li = styled(motion.div)`
  width: 100%;
  @media (min-width: 768px) {
    width: 70px;
  }
  > div:nth-child(1) {
    width: 10px;
  }
  border-bottom: 0.5px solid #099;
  border-top: 0.5px solid #099;
  font-weight: 600;
  font-size: 16px;
  padding: 7px 0;
  padding-left: 0px;

  @media (min-width: 768px) {
    border: 0;
    font-weight: 400;
    font-size: 14px;
    margin-right: 0px;
    margin-left: 0px;
    width: ;
  }
  > span {
    color: rgb(71, 71, 71);
    cursor: pointer;
    position: relative;
    padding-right: 0px;
    display: block;
    width: 100%;
  }
`;

export const NavOptions = styled.div``;
