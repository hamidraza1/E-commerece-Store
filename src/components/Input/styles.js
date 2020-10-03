import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  display: block;
  font-size: 16px;
  font-family: sans-serif;

  padding: 5px 20px;
  height: 40px;
  box-sizing: border-box;
  min-width: 0;
  width: 50px;
  border: 1px solid rgb(231, 234, 236);
  text-align: center;
  &:focus {
    border-color: black;
  }
`;
