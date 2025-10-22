import styled from 'styled-components';

const jokerColorBackground = `
  linear-gradient(180deg,
    #FF4C4D 14.2857142857%,
    #FF4CFF 0, #FF4CFF 28.5714285714%,
    #4C55FF 0, #4C55FF 42.8571428571%,
    #4CD8FF 0, #4CD8FF 57.1428571429%,
    #4CFF5B 0, #4CFF5B 71.4285714286%,
    #EDFF4C 0, #EDFF4C 85.7142857143%,
    #FFA64C 0);
`;

export const FilterRoot = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme.palette.primaryLightest};
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1.5rem;
`;

export const FilterCategory = styled.div`
  margin-bottom: 0.5rem;
`;

export const FilterText = styled.span`
  display: block;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.palette.primaryDark};
`;

export const FilterColors = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Color = styled.span`
  cursor: pointer;
  margin-top: 0.875rem;
  margin-right: 1rem;
  display: block;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: ${props =>
    props.joker ? jokerColorBackground : props.color};
  box-shadow: ${props =>
    props.active ? '0 0 0 0.2rem #4882F7' : '0px 2px 4px #cedefd'};
`;

export const FilterSizes = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Size = styled.div`
  cursor: pointer;
  margin-top: 0.875rem;
  margin-right: 1rem;
  border-radius: 39px;
  display: flex;
  flex-direction: row;
  padding: 0.375rem 0.875rem;
  border: 3px solid
    ${props =>
      props.active
        ? props.theme.palette.primaryRegular
        : props.theme.palette.primaryLighter};

  span {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: bold;
    color: ${props =>
      props.active
        ? props.theme.palette.primaryRegular
        : props.theme.palette.primaryLight};

    @media (min-width: ${props => props.theme.screens.lg}) {
      font-size: 0.75rem;
      line-height: 0.937rem;
    }
  }
`;
