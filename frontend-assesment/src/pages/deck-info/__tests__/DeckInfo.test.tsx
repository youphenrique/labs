import React from 'react';
import { Route } from 'react-router-dom';
import DeckInfo from '../DeckInfo';
import mockAxios from '../../../utils/mock-axios';
import { CARDS_PILE_NAME } from '../../../utils/constants';
import pileCards1 from '../../../__mocks__/pile-cards-1.json';
import pileCards2 from '../../../__mocks__/pile-cards-2.json';
import pileCards3 from '../../../__mocks__/pile-cards-3.json';
import {
  screen,
  within,
  renderWithRouter,
  waitForElementToBeRemoved,
} from '../../../utils/test-utils';

// workaround for the error TypeError: window.matchMedia is not a function
// https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('<DeckInfo/> test suite', () => {
  const deckId = 'ojxixv5iq1mx';

  test('renders correctly the component with pileCards1 data', async () => {
    mockAxios
      .onGet(`/deck/${deckId}/pile/${CARDS_PILE_NAME}/list`)
      .reply(200, pileCards1);

    renderWithRouter(<Route path="/deck/:deckId" component={DeckInfo} />, {
      route: `/deck/${deckId}`,
    });

    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'));

    const { cards } = pileCards1.piles.cards;
    const highestCardParentElement = screen.getByText(/highest card/i)
      .parentNode as HTMLElement;
    const fullHouseCombinationsParentElement = screen.getByText(
      /full house combinations/i,
    ).parentNode as HTMLElement;

    expect(screen.getByText(/ordered pile/i)).toBeInTheDocument();

    cards.forEach(card => {
      expect(screen.getByTestId(`card-${card.code}`)).toBeInTheDocument();
    });

    expect(
      within(highestCardParentElement).getByText('9S'),
    ).toBeInTheDocument();
    expect(
      within(fullHouseCombinationsParentElement).getByText('None'),
    ).toBeInTheDocument();
  });

  test('renders correctly the component with pileCards2 data', async () => {
    mockAxios
      .onGet(`/deck/${deckId}/pile/${CARDS_PILE_NAME}/list`)
      .reply(200, pileCards2);

    renderWithRouter(<Route path="/deck/:deckId" component={DeckInfo} />, {
      route: `/deck/${deckId}`,
    });

    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'));

    const { cards } = pileCards2.piles.cards;
    const highestCardParentElement = screen.getByText(/highest card/i)
      .parentNode as HTMLElement;
    const fullHouseCombinationsParentElement = screen.getByText(
      /full house combinations/i,
    ).parentNode as HTMLElement;

    expect(screen.getByText(/ordered pile/i)).toBeInTheDocument();

    cards.forEach(card => {
      expect(screen.getByTestId(`card-${card.code}`)).toBeInTheDocument();
    });

    expect(
      within(highestCardParentElement).getByText('KH'),
    ).toBeInTheDocument();
    expect(
      within(fullHouseCombinationsParentElement).getByText(
        'AD, AC, AS, KH, KS',
      ),
    ).toBeInTheDocument();
  });

  test('renders correctly the component with pileCards3 data', async () => {
    const fullHouseCombinations = [
      '2H, 2D, 2C, 3H, 3D',
      '3H, 3D, 3C, 2H, 2D',
      '2H, 2D, 2S, 3H, 3D',
      '2H, 2D, 2C, 3H, 3C',
      '2H, 2D, 2S, 3H, 3C',
      '3H, 3D, 3C, 2H, 2C',
      '2H, 2C, 2S, 3H, 3D',
      '3H, 3D, 3C, 2H, 2S',
      '2H, 2C, 2S, 3H, 3C',
      '2H, 2D, 2C, 3D, 3C',
      '2H, 2D, 2S, 3D, 3C',
      '2H, 2C, 2S, 3D, 3C',
      '3H, 3D, 3C, 2D, 2C',
      '2D, 2C, 2S, 3H, 3D',
      '3H, 3D, 3C, 2D, 2S',
      '2D, 2C, 2S, 3H, 3C',
      '3H, 3D, 3C, 2C, 2S',
      '2D, 2C, 2S, 3D, 3C',
    ];

    mockAxios
      .onGet(`/deck/${deckId}/pile/${CARDS_PILE_NAME}/list`)
      .reply(200, pileCards3);

    renderWithRouter(<Route path="/deck/:deckId" component={DeckInfo} />, {
      route: `/deck/${deckId}`,
    });

    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'));

    const { cards } = pileCards3.piles.cards;
    const highestCardParentElement = screen.getByText(/highest card/i)
      .parentNode as HTMLElement;
    const fullHouseCombinationsParentElement = screen.getByText(
      /full house combinations/i,
    ).parentNode as HTMLElement;

    expect(screen.getByText(/ordered pile/i)).toBeInTheDocument();

    cards.forEach(card => {
      expect(screen.getByTestId(`card-${card.code}`)).toBeInTheDocument();
    });

    expect(
      within(highestCardParentElement).getByText('2H'),
    ).toBeInTheDocument();

    fullHouseCombinations.forEach(combination => {
      expect(
        within(fullHouseCombinationsParentElement).getByText(combination),
      ).toBeInTheDocument();
    });
  });

  test('renders ui when happens fetch API error', async () => {
    mockAxios
      .onGet(`/deck/${deckId}/pile/${CARDS_PILE_NAME}/list`)
      .networkError();

    renderWithRouter(<Route path="/deck/:deckId" component={DeckInfo} />, {
      route: `/deck/${deckId}`,
    });

    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'));

    expect(screen.getByTestId('fetch-error')).toBeInTheDocument();
  });
});
