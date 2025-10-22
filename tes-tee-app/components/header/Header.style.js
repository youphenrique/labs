import styled from 'styled-components';
import { IconButtonRoot } from '../icon-button/IconButton.style';

export const HeaderRoot = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  @media (min-width: ${props => props.theme.screens.lg}) {
    margin: 0.375rem 0;
  }
`;

export const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 85px;
`;

export const HeaderMenuButton = styled(IconButtonRoot)`
  margin-left: 0;
  padding-left: 0;
`;

export const HeaderLogo = styled.img`
  margin: 0 0.75rem;
  width: 142px;
`;

export const DesktopSearch = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.screens.lg}) {
    min-width: 521px;
    display: block;
  }
`;

export const MobileSearchIcon = styled.div`
  @media (min-width: ${props => props.theme.screens.lg}) {
    display: none;
  }
`;

export const MyCart = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CartText = styled.span`
  display: none;

  @media (min-width: ${props => props.theme.screens.lg}) {
    display: block;
    margin-left: 0.5rem;
    color: ${props => props.theme.palette.primaryDark};
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.187rem;
  }
`;
