var deck = [1,2,3,4,5,6];


function shuffle(deck) {
	var m = deck.length, t, i;

while (m) {
	i = Math.floor(Math.random()* m--);

	t = deck[m];
	deck[m] = deck[i];
	deck[i] = t;
	}
 return deck;
}
console.log(shuffle(deck));