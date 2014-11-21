
function max(x,y) {
	
	if (x > y) {
		return x;
	}
	else {
		return y;
	}
}

var x = Math.floor(Math.random()*(100 -1) +1);
var y = Math.floor(Math.random()*(100 -1) +1);

console.log(x,y)
console.log(max(x,y));