/**
 * CardValue class
 *
 * @param name {string}
 */
class Suit {
	constructor(name) {
		this.name = name;
	}
}

const Hearts = new Suit('Hearts');
const Diamonds = new Suit('Diamonds');
const Spades = new Suit('Spades');
const Clubs = new Suit('Clubs');
const Black = new Suit('Black');
const Red = new Suit('Red');

export default Suit;
export { Hearts, Diamonds, Spades, Clubs, Black, Red };