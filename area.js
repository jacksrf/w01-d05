
function area(x,y) {
	var area = (x*y);
	return area
}


for (i = 0; i < 3; i++ ) {
	var x = Math.floor(Math.random()*(100 -1) +1);
	var y = Math.floor(Math.random()*(100 -1) +1);
	console.log(x,y)
	console.log(area(x,y));
}