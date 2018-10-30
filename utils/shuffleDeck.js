function shuffleDeck(originalDeck) {
  // Shallow clone of the deck
  const deck = originalDeck.slice(0);
  for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  // Returns the shuffled clone
  return deck;
}

export default shuffleDeck;