import styled from 'styled-components';

export const IconButtonRoot = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.25rem;
  padding: 0.25rem;
  border: none;
  background-color: transparent;
  color: ${props =>
    props.disabled ? props.theme.palette.disabled : 'currentColor'};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;
