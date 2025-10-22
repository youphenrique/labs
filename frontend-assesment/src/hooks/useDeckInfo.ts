import * as React from 'react';
import { getSuitAndValueFromCard } from '../utils/fns';
import { PileCardsData } from '../services/client';

function turnCombinationOfCardsIntoMap(combinationOfCards: string[]) {
  const map = new Map<string, number>();

  combinationOfCards.forEach(card => {
    const [, cardValue] = getSuitAndValueFromCard(card);
    let cardValueCount = map.get(cardValue);
    if (cardValueCount !== undefined) {
      map.set(cardValue, ++cardValueCount);
    } else {
      map.set(cardValue, 1);
    }
  });

  return map;
}

function formatFullHouseCombination(combinationOfCards: string[]) {
  const map = turnCombinationOfCardsIntoMap(combinationOfCards);

  function compare(cardA: string, cardB: string) {
    const [, cardValueA] = getSuitAndValueFromCard(cardA);
    const [, cardValueB] = getSuitAndValueFromCard(cardB);
    const cardValueCountA = map.get(cardValueA) ?? 0;
    const cardValueCountB = map.get(cardValueB) ?? 0;

    if (cardValueCountA < cardValueCountB) {
      return 1;
    }

    if (cardValueCountA > cardValueCountB) {
      return -1;
    }

    return 0;
  }

  return combinationOfCards.sort(compare);
}

function checkIfIsFullHouseCombination(combinationOfCards: string[]) {
  const map = turnCombinationOfCardsIntoMap(combinationOfCards);

  if (map.size === 2) {
    const mapIterator = map.values();
    const valueCount1: number = mapIterator.next().value;
    const valueCount2: number = mapIterator.next().value;
    return (
      (valueCount1 % 3 === 0 && valueCount2 % 2 === 0) ||
      (valueCount1 % 2 === 0 && valueCount2 % 3 === 0)
    );
  }

  return false;
}

export default function useDeckInfo(data: PileCardsData | undefined) {
  const [cards, setCards] = React.useState<string[]>([]);
  const fullHouseCombinationsRef = React.useRef<string[][]>([]);
  const [fullHouseCombinations, setFullHouseCombinations] = React.useState<
    string[][]
  >([]);

  const findFullHouseCombinations = React.useCallback(
    (arr: number[], start: number, n: number, k: number, maxk: number) => {
      if (k > maxk) {
        const combinationOfCards: string[] = [];

        for (let it = 1; it <= maxk; it++) {
          combinationOfCards.push(cards[arr[it] - 1]);
        }

        if (checkIfIsFullHouseCombination(combinationOfCards)) {
          const combinationOfFormattedCards = formatFullHouseCombination(
            combinationOfCards,
          );
          fullHouseCombinationsRef.current.push(
            combinationOfFormattedCards,
          );
        }

        return;
      }

      for (let it = start; it <= n; it++) {
        arr[k] = it;
        findFullHouseCombinations(arr, it + 1, n, k + 1, maxk);
      }
    },
    [cards],
  );

  React.useEffect(() => {
    if (data) {
      const orderedCards = data.piles.cards.cards.map(({ code }) => code);
      setCards(orderedCards);
    }
  }, [data]);

  React.useEffect(() => {
    const cardsTotal = cards.length;

    if (cardsTotal >= 5) {
      const cardsGroup = 5;
      fullHouseCombinationsRef.current = [];
      findFullHouseCombinations(
        new Array(cardsTotal),
        1,
        cardsTotal,
        1,
        cardsGroup,
      );
      setFullHouseCombinations(fullHouseCombinationsRef.current);
    }
    // eslint-disable-next-line
  }, [findFullHouseCombinations]);

  return { cards, fullHouseCombinations };
}
