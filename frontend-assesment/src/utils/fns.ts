export function getSuitAndValueFromCard(card: string) {
  const suit = card.slice(-1);
  const value = card.slice(0, card.length - 1);
  return [suit, value];
}
