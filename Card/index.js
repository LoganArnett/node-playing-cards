/**
 * @class Card
 * @description A single card
 */
export default class Card {
	constructor(suit, cardValue) {
		if (!suit) {
			return new Error('Card must have a suit');
		}

		if (!cardValue) {
			return new Error('Card must have a cardValue');
		}

		this.suit = suit;
		this.cardValue = cardValue;
	}

	/**
	 * @type {string|void}
	 * @description The full card description
	 */
	get fullCard() {
		return `${this.cardValue} of ${this.suit}`;
	}
}