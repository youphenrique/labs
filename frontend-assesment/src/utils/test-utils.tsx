import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import * as RTL from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import theme from '../styles/theme';
import { ToastContainer } from 'react-toastify';

type ProvidersProps = {
  children?: React.ReactNode;
};

function Providers(props: ProvidersProps) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      <ToastContainer closeButton={false} hideProgressBar />
    </React.Fragment>
  );
}

function customRender(
  ui: React.ReactElement,
  options?: RTL.RenderOptions,
) {
  return RTL.render(ui, { wrapper: Providers, ...options });
}

function renderWithRouter(
  ui: React.ReactElement,
  { route = '/', ...options } = {},
) {
  return {
    ...RTL.render(
      <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>,
      {
        wrapper: Providers,
        ...options,
      },
    ),
  };
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, renderWithRouter };
