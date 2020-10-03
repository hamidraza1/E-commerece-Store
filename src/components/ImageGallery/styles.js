import styled from 'styled-components';

export const ImageGallerWrapper = styled.section`
  > div:first-child {
    border: 1px solid #ccc;
  }
  > div:last-child {
    margin-top: 5px;

    grid-gap: 5px;
    display: none;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
