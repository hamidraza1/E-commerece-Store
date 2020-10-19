import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FiltersWrapper = styled.div`
  background: white;
  padding: 20px 15px;
`;
export const CategoriesTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-itmes: center;
  border-bottom: 1px solid #00b034;
  padding-bottom: 15px;
  cursor: pointer;
  > span {
    color: #00b034;
  }
  > svg {
    color: #00b034;
  }
`;
export const PriceFilterTitle = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-itmes: center;
  border-bottom: 1px solid #00b034;
  padding-bottom: 15px;
  cursor: pointer;
  > span {
    color: #00b034;
  }
  > svg {
    color: #00b034;
  }
`;
export const CategoriesOptions = styled(motion.div)`
  overflow: hidden;
`;
export const PriceFilterOptions = styled(motion.div)`
  overflow: hidden;
`;
