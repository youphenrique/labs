import styled from 'styled-components';

export const ProductRoot = styled.div`
  background: ${props => props.theme.palette.primaryLightest};
  border-radius: 0.625rem;
  padding: 0.875rem;
  margin-bottom: 1.5rem;
`;

export const ProductImage = styled.img`
  margin-bottom: 1rem;
  border: 3px solid ${props => props.theme.palette.primaryLighter};
  border-radius: 5px;
`;

export const ProductName = styled.span`
  display: block;
  color: ${props => props.theme.palette.primaryDark};
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const ProductSizes = styled.div`
  margin-bottom: 0.875rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Size = styled.div`
  margin-top: 1rem;
  margin-right: 0.5rem;
  border-radius: 39px;
  display: flex;
  flex-direction: row;
  padding: 0.375rem 0.875rem;
  border: 3px solid ${props => props.theme.palette.primaryLight};

  span {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: bold;
    color: ${props => props.theme.palette.primaryRegular};
  }
`;
