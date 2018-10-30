import { shuffleDeck } from '../utils';

/**
 * @class Deck
 * @param cards {Card[]}
 * @description A deck of cards
 */
export default class Deck {
	constructor(cards = []) {
    this.cards = new Set(cards);
    // Initially shuffle the deck
    this.deck = shuffleDeck(cards.slice());
    this.discardPile = [];
  }

  /**
	 * Collects the cards and reshuffles them
	 *
	 * @return {void}
	 */
	reShuffle() {
		const { deck, discardPile } = this;

		deck.push(...discardPile);
		discardPile.length = 0;

		shuffleDeck(deck);
	}

	/**
	 * Draws a certain number of cards and returns them
	 *
	 * @param count {number}
	 * @return {Card[]}
	 */
	draw(count = 1) {
		const { deck, discardPile } = this;

		if (!deck.length) {
			return new Error('No Cards Remaining');
		}

		if (count < 0) {
			return [];
		}

		const cards = deck.splice(0, count);
		discardPile.push(...cards);
		return cards;
	}
}