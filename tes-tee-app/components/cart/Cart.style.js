import styled from 'styled-components';
import { IconButtonRoot } from '../icon-button/IconButton.style';

export const CartRoot = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.palette.primaryLightest};
`;

export const CartHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & > div:first-child {
    display: flex;
  }
`;

export const CartHeaderClose = styled(IconButtonRoot)`
  margin: 0;
  padding: 0;
`;

export const CartHeaderText = styled.span`
  display: block;
  margin-left: 0.75rem;
  font-size: 1.5rem;
  line-height: 1.812rem;
  font-weight: bold;
  color: ${props => props.theme.palette.primaryDark};
`;

export const CartBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: ${props => (props.emptyCart ? 'center' : 'flex-start')};
  padding: 0 1.5rem;
  flex-direction: column;
`;

export const CartEmptyText = styled.span`
  font-size: 1.5rem;
  line-height: 1.812rem;
  font-weight: bold;
  color: ${props => props.theme.palette.primaryLight};
`;

export const CartEmptyButton = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

export const CartItems = styled.div`
  width: 100%;
  flex: 1;
  margin-bottom: 1rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.875rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const ItemImage = styled.img`
  border: 3px solid ${props => props.theme.palette.primaryLighter};
  margin-right: 1rem;
  border-radius: 5px;
  width: 4rem;
`;

export const ItemName = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.187rem;
  color: ${props => props.theme.palette.primaryDark};
`;

export const ItemCostPrice = styled.div`
  display: flex;
  align-items: center;
`;

export const CartTotals = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const CartTotal = styled.span`
  font-size: 1rem;
  line-height: 1.187rem;
  font-weight: bold;
  color: ${props => props.theme.palette.primaryDark};
`;

export const CartGrandTotal = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.palette.primaryRegular};
`;

export const CartDivider = styled.hr`
  background: ${props => props.theme.palette.primaryLighter};
  border-radius: 4px;
  border: transparent;
  height: 3px;
  width: 100%;
  margin: 0 auto;
`;

export const CartFooter = styled.div`
  padding: 1.5rem;
`;
