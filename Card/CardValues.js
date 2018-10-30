/**
 * CardValue class
 *
 * @param name {string}
 * @param displayName {string}
 */
class CardValue {
	constructor(name, displayName) {
		this.name = name;
		this.displayName = displayName;
	}
}

const Two = new CardValue('2',  'Two');
const Three = new CardValue('3',  'Three');
const Four = new CardValue('4',  'Four');
const Five = new CardValue('5',  'Five');
const Six = new CardValue('6',  'Six');
const Seven = new CardValue('7',  'Seven');
const Eight = new CardValue('8',  'Eight');
const Nine = new CardValue('9',  'Nine');
const Ten = new CardValue('10', 'Ten');
const Jack = new CardValue('J',  'Jack');
const Queen = new CardValue('Q',  'Queen');
const King = new CardValue('K',  'King');
const Ace = new CardValue('A',  'Ace');
const Joker = new CardValue('Joker', 'Joker');

export default CardValue;
export { Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King, Ace, Joker };