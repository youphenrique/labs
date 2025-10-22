import React from 'react';
import { Route } from 'react-router-dom';
import DeckForm from '../DeckForm';
import {
  screen,
  waitFor,
  fireEvent,
  renderWithRouter,
} from '../../../utils/test-utils';

describe('<DeckForm/> test suit', () => {
  test('renders the component correctly', () => {
    renderWithRouter(<Route path="/deck/new" component={DeckForm} />, {
      route: '/deck/new',
    });

    expect(document.title).toBe('Form • Deck Analyzer');
    expect(screen.getByText(/Cards/)).toBeInTheDocument();
    expect(
      screen.getByText(
        'These should be 10 valid cards, at most, from a common deck',
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByTestId('card-input').length).toBe(10);
    expect(screen.getByText(/Rotation Card/)).toBeInTheDocument();
    expect(
      screen.getByText(
        'This card defines the highest value card in the deck',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Rotation card'),
    ).toBeInTheDocument();
  });

  test('shows validation errors when submitting empty form', async () => {
    renderWithRouter(<Route path="/deck/new" component={DeckForm} />, {
      route: '/deck/new',
    });

    const submitButtonText = screen.getByText(/submit/i);

    fireEvent.click(
      submitButtonText.closest('button') as HTMLButtonElement,
    );

    await waitFor(() => screen.getByTestId('card-fields-error-message'));

    expect(
      screen.getByTestId('card-fields-error-message').textContent,
    ).toBe('Insert at least one valid card');
    expect(
      screen.getByTestId('rotation-card-error-message').textContent,
    ).toBe('Rotation card is required');
  });

  test('shows validation error with an invalid card', async () => {
    renderWithRouter(<Route path="/deck/new" component={DeckForm} />, {
      route: '/deck/new',
    });

    const cardInput1 = screen.getByPlaceholderText('Card 1');

    fireEvent.change(cardInput1, { target: { value: 'AW' } });
    fireEvent.blur(cardInput1);

    await waitFor(() => screen.getByTestId('card-1-error-message'));

    expect(screen.getByTestId('card-1-error-message').textContent).toBe(
      'AW is not a valid card',
    );
  });

  test('shows validation error with matching cards', async () => {
    renderWithRouter(<Route path="/deck/new" component={DeckForm} />, {
      route: '/deck/new',
    });

    const cardInput1 = screen.getByPlaceholderText('Card 1');

    fireEvent.change(cardInput1, { target: { value: 'JH' } });
    fireEvent.blur(cardInput1);

    const cardInput2 = screen.getByPlaceholderText('Card 2');

    fireEvent.change(cardInput2, { target: { value: 'JH' } });
    fireEvent.blur(cardInput2);

    await waitFor(() => screen.getByTestId('card-2-error-message'));

    expect(screen.getByTestId('card-2-error-message').textContent).toBe(
      'JH has already been inserted',
    );
  });

  test('shows validation error with invalid rotation card', async () => {
    renderWithRouter(<Route path="/deck/new" component={DeckForm} />, {
      route: '/deck/new',
    });

    const rotationCardInput = screen.getByPlaceholderText('Rotation card');

    fireEvent.change(rotationCardInput, { target: { value: 'AW' } });
    fireEvent.blur(rotationCardInput);

    await waitFor(() => screen.getByTestId('rotation-card-error-message'));

    expect(
      screen.getByTestId('rotation-card-error-message').textContent,
    ).toBe('AW is not a valid card');
  });
});
