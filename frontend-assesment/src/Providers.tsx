import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/custom-toastify.css';
import theme from './styles/theme';

type ThemeProps = {
  children?: React.ReactNode;
};

export default function Providers(props: ThemeProps) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router>{props.children}</Router>
      </ThemeProvider>
      <ToastContainer closeButton={false} hideProgressBar />
    </React.Fragment>
  );
}
