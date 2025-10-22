import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyle from './global';

export default function StyleProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

StyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
