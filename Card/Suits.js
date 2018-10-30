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

const Hearts = new Suit('hearts');
const Diamonds = new Suit('diamonds');
const Spades = new Suit('spades');
const Clubs = new Suit('clubs');

export default Suit;
export { Hearts, Diamonds, Spades, Clubs };