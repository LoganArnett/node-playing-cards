import CommonDeck from './Deck/CommonDeck';

const deck = new CommonDeck();

const firstDraw = deck.draw();
console.log(firstDraw)

const secondDraw = deck.draw(4);
console.log(secondDraw)

