import * as React from 'react';
import { Route, RouteChildrenProps } from 'react-router-dom';
import mockAxios from '../../utils/mock-axios';
import DeckInfo from './DeckInfo';
import pileCards1 from '../../__mocks__/pile-cards-1.json';
import pileCards2 from '../../__mocks__/pile-cards-2.json';
import pileCards3 from '../../__mocks__/pile-cards-3.json';
import { CARDS_PILE_NAME } from '../../utils/constants';

type MatchParams = { deckId: string };

export default {
  title: 'DeckInfo',
  component: DeckInfo,
};

const deckId = 'ojxixv5iq1mx';

export const pile1 = () => {
  mockAxios
    .onGet(`/deck/${deckId}/pile/${CARDS_PILE_NAME}/list`)
    .reply(200, pileCards1);

  return (
    <Route>
      {(props: RouteChildrenProps<MatchParams>) => (
        <DeckInfo
          {...props}
          match={{ ...props.match!, params: { deckId } }}
        />
      )}
    </Route>
  );
};

export const pile2 = () => {
  mockAxios
    .onGet(`/deck/${deckId}/pile/${CARDS_PILE_NAME}/list`)
    .reply(200, pileCards2);

  return (
    <Route>
      {(props: RouteChildrenProps<MatchParams>) => (
        <DeckInfo
          {...props}
          match={{ ...props.match!, params: { deckId } }}
        />
      )}
    </Route>
  );
};

export const pile3 = () => {
  mockAxios
    .onGet(`/deck/${deckId}/pile/${CARDS_PILE_NAME}/list`)
    .reply(200, pileCards3);

  return (
    <Route>
      {(props: RouteChildrenProps<MatchParams>) => (
        <DeckInfo
          {...props}
          match={{ ...props.match!, params: { deckId } }}
        />
      )}
    </Route>
  );
};

export const withFetchError = () => {
  mockAxios
    .onGet(`/deck/${deckId}/pile/${CARDS_PILE_NAME}/list`)
    .networkError();

  return (
    <Route>
      {(props: RouteChildrenProps<MatchParams>) => (
        <DeckInfo
          {...props}
          match={{ ...props.match!, params: { deckId } }}
        />
      )}
    </Route>
  );
};
