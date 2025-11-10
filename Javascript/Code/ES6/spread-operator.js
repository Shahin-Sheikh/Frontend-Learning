const odd = [1, 3, 5]; // Spread operator main purpose is copy elements of an iterable object such as an array, map, or set.
const combined = [2, 4, 6, ...odd];
console.log(combined);

//Output:

// [ 2, 4, 6, 1, 3, 5 ]
