import styled from 'styled-components';

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

  return 'transparent';
}

export const ButtonRoot = styled.button`
  cursor: pointer;
  border: transparent;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.187rem;
  padding: ${props => (props.outlined ? '7px 19px' : '10px 22px')};
  border: ${props => (props.outlined ? '3px solid #CEDEFD' : 'none')};
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  color: ${props => colorStyle(props.color, props.theme)};
  background-color: ${props =>
    backgroundColorStyle(props.bg, props.theme)};

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 109, 255, 0.4);
  }

  &[disabled] {
    cursor: auto;
    background-color: ${props => props.theme.palette.primaryLight};
  }
`;
