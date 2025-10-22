import { renderHook } from '@testing-library/react-hooks';
import useDeckInfo from '../useDeckInfo';
import { PileCardsData } from '../../services/client';
import pileCards1 from '../../__mocks__/pile-cards-1.json';
import pileCards2 from '../../__mocks__/pile-cards-2.json';
import pileCards3 from '../../__mocks__/pile-cards-3.json';

describe('useDeckInfo hook test suite', () => {
  let pileCardsData: PileCardsData | undefined;

  beforeEach(() => {
    pileCardsData = undefined;
  });

  test('returns correctly the deck info from pileCards1 data', () => {
    const pileCardsCount1 = pileCards1.piles.cards.cards.length;

    const { result, rerender } = renderHook(() =>
      useDeckInfo(pileCardsData),
    );

    expect(result.current.cards.length).toBe(0);
    expect(result.current.fullHouseCombinations.length).toBe(0);

    pileCardsData = pileCards1;
    rerender();

    expect(result.current.cards.length).toBe(pileCardsCount1);
    expect(result.current.fullHouseCombinations.length).toBe(0);
  });

  test('returns correctly the deck info from pileCards2 data', () => {
    const pileCardsCount2 = pileCards2.piles.cards.cards.length;

    const { result, rerender } = renderHook(() =>
      useDeckInfo(pileCardsData),
    );

    expect(result.current.cards.length).toBe(0);
    expect(result.current.fullHouseCombinations.length).toBe(0);

    pileCardsData = pileCards2;
    rerender();

    expect(result.current.cards.length).toBe(pileCardsCount2);
    expect(result.current.fullHouseCombinations.length).toBe(1);
  });

  test('returns correctly the deck info from pileCards3 data', () => {
    const pileCardsCount3 = pileCards3.piles.cards.cards.length;

    const { result, rerender } = renderHook(() =>
      useDeckInfo(pileCardsData),
    );

    expect(result.current.cards.length).toBe(0);
    expect(result.current.fullHouseCombinations.length).toBe(0);

    pileCardsData = pileCards3;
    rerender();

    expect(result.current.cards.length).toBe(pileCardsCount3);
    expect(result.current.fullHouseCombinations.length).toBe(18);
  });
});
