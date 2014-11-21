var counter = 0;

var sayHi = function() {
	console.log("Hi");
	counter++;
	if (counter === 5) {
		clearInterval(refreshIntervalId);
	}
}

var refreshIntervalId = setInterval(sayHi, 500);