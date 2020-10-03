import styled from 'styled-components';

export const ImageThumbnailWrapper = styled.section`
  cursor: pointer;
  border: 1px solid ${props => (props.isActive ? 'blue' : '#eee')};
`;
