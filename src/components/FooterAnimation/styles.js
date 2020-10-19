import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterAnimationWrapper = styled.div`
  @media (min-width: 768px) {
    padding: 0 30px;
  }
  > div {
    > span {
      display: flex;
      align.items: center;
      justify-content: space-between;
      padding: 14px;
      border-top: 0.5px solid #00b034;
      @media (min-width: 768px) {
        border-top: 0;
      }

      font-size: 18px;
      > svg {
        color: #00b034;
        @media (min-width: 768px) {
          display: none;
        }
      }
    }
  }
`;
export const Menu = styled(motion.div)`
  color: #914747;
`;
export const Options = styled(motion.div)`
  overflow: hidden;
  @media (min-width: 768px) {
    height: auto !important;
  }
  > div {
    padding-top: 12px;
    padding-left: 12px;
    color: rgb(71, 71, 71);
  }
  > div:last-child {
    padding-bottom: 15px;
  }
`;
