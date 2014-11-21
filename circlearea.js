function circleArea(x) {
	var circleArea = (Math.PI * x * x);
	return circleArea
}


for (i = 0; i < 3; i++ ) {
	var x = Math.floor(Math.random()*(100 -1) +1);
	console.log(x)
	console.log(circleArea(x));
}