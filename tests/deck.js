import assert from 'assert';
import CommonDeck from '../Deck/CommonDeck';

describe('Deck Suite', () => {
  describe('Common Deck', () => {
    const Deck = new CommonDeck();
    it('should have 54 cards by default', () => {
      assert.equal(Deck.deck.length, 54);
    });

    it('should draw a card, return that card, and update the size of the deck and discardPile', () => {
      const drawnCards = Deck.draw();
      assert.equal(drawnCards.length, 1);
      assert.equal(Deck.deck.length, 53);
      assert.equal(Deck.discardPile.length, 1);
    });

    it('should draw multiple cards, return all cards, and update the size of the deck and discardPile', () => {
      const drawnCards = Deck.draw(10);
      assert.equal(drawnCards.length, 10);
      assert.equal(Deck.deck.length, 43);
      assert.equal(Deck.discardPile.length, 11);
    });

    it('should collect the cards back to the deck when reShuffled', () => {
      Deck.reShuffle();
      assert.equal(Deck.deck.length, 54);
      assert.equal(Deck.discardPile.length, 0);
    });
  });
});