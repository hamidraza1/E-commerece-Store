import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  width: 100%;

  > input {
    width: 90%;
    border: none;
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    padding: 5px 20px;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid #00b034;
    border-right: none;
  }
`;
export const SearchIcon = styled.div`
  color: rgb(0, 153, 153);
  font-size: 20px;
  margin-left: ;
  width: 10%;
  @media (min-width: 786px) {
    margin-left: ;
  }
`;
