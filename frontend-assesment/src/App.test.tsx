import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, renderWithRouter, screen } from './utils/test-utils';
import App from './App';

describe('<App/> test suite', () => {
  it('renders the component on default route', () => {
    renderWithRouter(<App />);
    expect(document.title).toBe('Form • Deck Analyzer');
  });

  it('renders 404 page when landing on a bad page', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <App />
      </Router>,
    );

    history.push('/some-bad-route');

    expect(document.title).toBe('Page Not Found • Deck Analyzer');
    expect(
      screen.getByText('404. Oops! Page not found!'),
    ).toBeInTheDocument();
  });
});
