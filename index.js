import CommonDeck from './Deck/CommonDeck';
import { formatConsole } from './utils';
// Create New Deck
const Deck = new CommonDeck();
const { deck, discardPile } = Deck;
// Check for Shuffle
formatConsole('Brand New Deck', deck);
formatConsole('Deck Length', deck.length);
formatConsole('Discard Pile Length', discardPile.length);
// Draw first card
const firstDraw = Deck.draw();
formatConsole('First Card', firstDraw);
formatConsole('Deck Length Check', deck.length);
formatConsole('Discard Pile Length', discardPile.length);
// Draw multiple cards
const secondDraw = Deck.draw(4);
formatConsole('Multiple Cards Drawn', secondDraw);
formatConsole('Deck Length Check', deck.length);
formatConsole('Discard Pile Length', discardPile.length);

