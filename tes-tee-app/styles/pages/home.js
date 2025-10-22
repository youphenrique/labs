import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
  max-width: ${props => props.theme.screens.xl};
`;

export const MobileSearch = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;

  @media (min-width: ${props => props.theme.screens.lg}) {
    display: none;
  }
`;

export const MainContent = styled.div`
  display: flex;
  padding: 0 1.5rem 1.5rem 1.5rem;
  flex-wrap: wrap;

  @media (min-width: ${props => props.theme.screens.lg}) {
    padding: 0;
  }
`;

export const FilterBox = styled.div`
  flex: 1;

  @media (min-width: ${props => props.theme.screens.lg}) {
    padding: 0 0.75rem;
    flex-grow: 0;
    max-width: 24%;
    flex-basis: 24%;
  }
`;

export const ProductListBox = styled.div`
  @media (min-width: ${props => props.theme.screens.lg}) {
    flex-grow: 0;
    max-width: 76%;
    flex-basis: 76%;
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${props => props.theme.screens.lg}) {
    > div {
      padding: 0 0.75rem;
      flex-grow: 0;
      max-width: 33.333%;
      flex-basis: 33.333%;
    }
  }
`;
