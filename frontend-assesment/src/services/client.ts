import { AsyncOptions } from 'react-async';
import api from './api';

type CreateDeckData = {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
};

export function createDeck(cards: string[]): Promise<CreateDeckData> {
  return api
    .get(`/deck/new/?cards=${cards.join()}`)
    .then(({ data }) => data);
}

export function drawCards(deckId: string, count: number) {
  return api
    .get(`/deck/${deckId}/draw/?count=${count}`)
    .then(data => data);
}

export function createPile(
  deckId: string,
  pileName: string,
  cards: string[],
) {
  return api
    .get(`/deck/${deckId}/pile/${pileName}/add/?cards=${cards.join()}`)
    .then(data => data);
}

type Cards = {
  code: string;
  image: string;
  images: { svg: string; png: string };
  value: string;
  suit: string;
};

export type PileCardsData = {
  success: boolean;
  deck_id: string;
  remaining: number;
  piles: {
    cards: {
      remaining: number;
      cards: Cards[];
    };
  };
};

export function getPileCards(props: AsyncOptions<PileCardsData>) {
  const { deckId, pileName } = props;

  return api
    .get(`/deck/${deckId}/pile/${pileName}/list`)
    .then(({ data }) => data);
}
