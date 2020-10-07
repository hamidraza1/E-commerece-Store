import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  width: 100%;

  > input {
    width: 92%;
    border: none;
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    padding: 5px 20px;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid rgb(231, 234, 236);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
export const SearchIcon = styled.div`
  color: rgb(0, 153, 153);
  font-size: 20px;
  margin-left: ;
  width: 8%;
  @media (min-width: 786px) {
    margin-left: ;
  }
`;
