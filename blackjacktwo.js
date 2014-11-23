var suits = ["hearts","diamonds","clubs","spades"];
var num = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
var deck = [];

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
console.log(newDeck);
console.log(newDeck.length);


//dealing the cards and value

for (i= -13; i < newDeck.length; i++) {

	var card1 = newDeck.pop();
	var card2 = newDeck.pop();
	var card3 = newDeck.pop();
	

	console.log(card1);
	console.log(card2);
	console.log(card3);

	if (card1.charAt(0) === "J" || card1.charAt(0) === "K" || card1.charAt(0) === "Q") {
			cardValue1 = parseInt(10);
		} 
		else if (card1.charAt(0) === "1"){
			cardValue1 = parseInt(10);
		}
		else if (card1.charAt(0) === "A"){
			cardValue1 = parseInt(1);
		} 
		else {
			cardValue1 = parseInt(card1.charAt(0));
		}

	if (card2.charAt(0) === "J" || card2.charAt(0) === "K" || card2.charAt(0) === "Q") {
			cardValue2 = parseInt(10);
		} 
		else if (card2.charAt(0) === "1"){
			cardValue2 = parseInt(10);
		}
		else if (card2.charAt(0) === "A"){
			cardValue2 = parseInt(1);
		} 
		else {
			cardValue2 = parseInt(card2.charAt(0));
		}

	if (card3.charAt(0) === "J" || card3.charAt(0) === "K" || card3.charAt(0) === "Q") {
			cardValue3 = parseInt(10);
		} 
		else if (card3.charAt(0) === "1"){
			cardValue3 = parseInt(10);
		}
		else if (card3.charAt(0) === "A"){
			cardValue3 = parseInt(1);
		} 
		else {
			cardValue3 = parseInt(card3.charAt(0));
		}

	var handValue = (cardValue1 + cardValue2 + cardValue3);
	console.log(handValue);

	if (handValue > 21 ) {
			console.log("BUST");
		}
		else if (handValue === 21) {
			
			console.log("BLACKJACK");
		}
		else {
			console.log("HIT, STAY, or SURRENDER")
		}

	if (deck.length === 1 ) {
		console.log("-----------TIME TO SHUFFLE-------------");
	}
}












