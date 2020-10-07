import styled from 'styled-components';
export const CheckboxWrapper = styled.div`
  height: 10px;
  width: 10px;
  border: 1px solid black;
  cursor: pointer;
  display: felx;
  background: ${props => (props.checked ? 'rgb(0,117,255)' : 'none')};
  padding: 1px;
  border-color: ${props => (props.checked ? 'rgb(0,117,255)' : 'black')};
  border-radius: 3px;

  > div {
    line-height: 1;
    margin: auto;
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    > svg {
      font-size: 10px;
      margin-bottom: 4px;
    }
  }
`;
