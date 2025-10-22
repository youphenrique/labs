/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
import StyleProvider from '../styles/provider';

export default function MyApp({ Component, pageProps }) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
