var deck = [1,2,3,4,5,6];
var newDeck = [];

var remove = function(x,y) {
		var z = y.indexOf(x,0);
			y.splice(z,1);
			return y;
		};

for (c = 0; c < deck.length; c++) {
	var randomNumber = deck[Math.floor(Math.random()*(deck.length-1)+1)];

	var d = newDeck.push(deck[c]);
	remove(d,deck);

}
console.log(newDeck);