
function max(x,y,z) {
	if (x > y && x > z) {
		return x;
	}
	else if (y > x && y > z) {
		return y;
	}
	else {
		return z;
	}
}

var x = parseInt(process.argv[2]);
var y = parseInt(process.argv[3]);
var z = parseInt(process.argv[4]);

console.log(max(x,y,z));