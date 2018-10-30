import Deck from './index';
import Card from '../Card';
import { Hearts, Diamonds, Spades, Clubs, Red, Black } from '../Card/Suits';
import { Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King, Ace, Joker } from '../Card/CardValues';
const suits = [ Hearts, Diamonds, Spades, Clubs ];
const cardValues = [ Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King, Ace ];

const buildCommonDeck = () => {
	var cards = [];

	suits.forEach((suit) => cardValues.forEach((val) => {
    cards.push(new Card(suit, val))
  }));
  // Add Jokers
  cards = [ ...cards, new Card(Black, Joker), new Card(Red, Joker)]
	return cards;
};

/**
 * @class CommonDeck
 */
export default class CommonDeck extends Deck {
	constructor() {
		super(buildCommonDeck());
	}
}