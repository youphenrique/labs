import styled from 'styled-components';
import { IconButtonRoot } from '../icon-button/IconButton.style';

export const ActionOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const SubtractButton = styled(IconButtonRoot)`
  margin-left: 0;
  width: 25px;
  height: 25px;
  background-color: ${props => props.theme.palette.primaryLighter};
  border-radius: 50%;
`;

export const AddButton = styled(IconButtonRoot)`
  width: 25px;
  height: 25px;
  background-color: ${props => props.theme.palette.primaryLighter};
  border-radius: 50%;
`;

export const PriceResult = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.25rem;
`;

export const ProductQuantity = styled.span`
  display: block;
  padding: 0 0.5rem;
  font-size: 1rem;
  line-height: 1.187rem;
  font-weight: bold;
  color: ${props => props.theme.palette.primaryRegular};
`;

export const ProductSize = styled.div`
  border-radius: 39px;
  padding: 0.125rem 0.75rem;
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
  border: 3px solid ${props => props.theme.palette.primaryLight};

  span {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: bold;
    color: ${props => props.theme.palette.primaryRegular};
  }
`;

export const TotalPrice = styled(ProductQuantity)`
  padding: 0;

  &::before {
    content: '$';
    display: inline-block;
    margin-left: 0.5rem;
  }
`;
