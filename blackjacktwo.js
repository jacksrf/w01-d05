var suits = ["hearts","diamonds","clubs","spades"];
var num = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
var deck = [];

var giveValue = function(x) {
	 

if (x.charAt(0) === "J" || x.charAt(0) === "K" || x.charAt(0) === "Q") {
		cardValue = parseInt(10);
		console.log(cardValue + " " + x);
	} 
	else if (x.charAt(0) === "1"){
			cardValue = parseInt(10);
			console.log(cardValue + " " + x);
	}
	else if (x.charAt(0) === "A"){
		cardValue = parseInt(1);
		console.log(cardValue + " " + x);
	} 
	else {
		cardValue = parseInt(x.charAt(0));
		console.log(cardValue + " " + x);
	}
}

function shuffle() {
	var m = deck.length, t, i;

while (m) {
	i = Math.floor(Math.random()* m--);

	t = deck[m];
	deck[m] = deck[i];
	deck[i] = t;
	}
 return deck;
}



//Making the deck of cards
for (i = 0; i < num.length; i++) {
	var z = 0;

	for (z = 0; z < suits.length; z++) {
		var x = num[i] + "-" + suits[z];
		
		deck.push(x);

	}
}


//shuffling the deck

var newDeck = shuffle(deck);
// console.log(newDeck);

//dealing the cards and value
for (i=0; i< newDeck.length; i++){
  for (i=0; i<3; i++){
    var chosen = Math.floor(newDeck.length*Math.random());
    var deal = newDeck[chosen];
    // console.log(deal);
    console.log(giveValue(deal))
    newDeck.splice(chosen, 1);
  }
}
