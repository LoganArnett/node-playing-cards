import Card from '../Card';
import { Hearts, Diamonds, Spades, Clubs } from '../Card/Suits';
import { Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King, Ace, Joker } from '../Card/CardValues';
const suits = [ Hearts, Diamonds, Spades, Clubs ];
const cardValues = [ Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King, Ace, Joker ];

const buildCommonDeck = () => {
	const cards = [];

	suits.forEach((suit) => cardValues.forEach((val) => cards.push(new Card(suit, val))));
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