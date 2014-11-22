var zoo = ["elephant", "alligator", "panda", "lion", "monkey", "koala", "tiger", "t-rex", "puffins", "dodo", "crawford", "penguins"];

// x = array you want to call on
// y = what you want to change in array

//add
var add = function(x,y) {
	y.push(x);
	return y;
}

//remove
var remove = function(x,y) {
		var z = y.indexOf(x,0);
			y.splice(z,1);
			return y;
		};



//switch
var swap = function(x,y,z) {
	index_x = z.indexOf(x,0);
	index_y = z.indexOf(y,0);
	new_z = z;
	new_z[index_x] = y;
	new_z[index_y] = x;
	return new_z;
}




var newZoo = add("kangaroo",zoo);
var newZoo2 = remove("dodo",newZoo);
var newZoo3 = swap("tiger","crawford",newZoo2);
var newZoo4 = newZoo3.sort();
var newZoo5 = newZoo4.reverse();
console.log(newZoo5);

