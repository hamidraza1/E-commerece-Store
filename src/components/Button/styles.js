import styled, { css } from 'styled-components';

const fullWidthStyles = ({ fullWidth }) => {
  if (fullWidth) {
    return css`
      display: block;
      width: 100%;
    `;
  }
};

export const Button = styled.button`
  outline: none;
  padding: 0 10px;
  height: 40px;
  line-height: 44px;
  box-shadow: none;
  font-size: 16px;
  font-family: sans-serif;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  background: white;
  color: #00b034;

  border: 1px solid #00b034;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  white-space: no-wrap;
  ${fullWidthStyles}

  &:hover:not(:disabled) {
    color: white;
    background: black;
    border: 1px solid rgba(0, 0, 0);
  }

  &:disabled {
    border-color: #999;
    cursor: not-allowed;
    color: #999;
  }
`;
