import styled from 'styled-components';
import { IconButtonRoot } from '../icon-button/IconButton.style';

function colorStyle(color, theme) {
  if (color) {
    return theme.palette[color] ? theme.palette[color] : color;
  }

  return 'currentColor';
}

function backgroundColorStyle(backgroundColor, theme) {
  if (backgroundColor) {
    return theme.palette[backgroundColor]
      ? theme.palette[backgroundColor]
      : backgroundColor;
  }

  return 'auto';
}

export const MenuRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuIconClose = styled.div`
  display: flex;
  padding: 1.5rem 0.75rem;
  justify-content: flex-end;

  @media (min-width: ${props => props.theme.screens.lg}) {
    display: none;
  }
`;

export const MenuIconCloseButton = styled(IconButtonRoot)`
  margin-top: 0;
`;

export const MenuLogo = styled.div`
  margin-bottom: 1rem;

  @media (min-width: ${props => props.theme.screens.lg}) {
    padding-top: 2.5rem;
  }
`;

export const Logo = styled.img`
  margin: 0 auto;
  padding-bottom: 0.75rem;
  width: 246px;
`;

export const Slogan = styled.span`
  display: block;
  text-align: center;
  padding: 0.75rem 0 1.5rem 0;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.palette.primaryRegular};

  sup {
    font-size: 0.75rem;
  }
`;

export const MenuNavItem = styled.li`
  cursor: pointer;
  padding: 1.25rem;
  text-align: center;
  background-color: ${props =>
    backgroundColorStyle(props.bg, props.theme)};
`;

export const MenuNavItemText = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: ${props => colorStyle(props.color, props.theme)};
`;

export const MenuSocialNetworks = styled.div`
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: flex-start;
  background-color: ${props => props.theme.palette.primaryDarker};
`;

export const MenuSocialNetworksButton = styled(IconButtonRoot)`
  padding: 0;
`;
