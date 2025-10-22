import styled from 'styled-components';

export const SearchRoot = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  @media (min-width: ${props => props.theme.screens.lg}) {
    padding: 0;
  }
`;

export const SearchIconBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
  padding-left: 0.75rem;
  z-index: 1;
`;

export const SearchInputLabel = styled.label`
  width: 100%;
`;

export const SearchInput = styled.input`
  position: relative;
  padding: 0.75rem 0.75rem 0.75rem 2.75rem;
  background-color: ${props => props.theme.palette.primaryLightest};
  color: ${props => props.theme.palette.primaryDark};
  border-radius: 5px;
  outline: 0;
  border: transparent;
  width: 100%;
  font-size: 1rem;
  line-height: 1.187rem;

  &::placeholder {
    color: ${props => props.theme.palette.primaryDark};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.palette.primaryLight};
  }

  @media (min-width: ${props => props.theme.screens.lg}) {
    padding: 0.75rem 0.75rem 0.75rem 3rem;
  }
`;
