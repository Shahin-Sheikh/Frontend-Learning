// Higher Order Functions in JavaScript
// Functions that can take other functions as arguments or return functions

// Function that takes another function as an argument
function map(array, transform) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(transform(array[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const doubled = map(numbers, function (x) {
  return x * 2;
});
console.log(doubled); // Outputs: [2, 4, 6, 8]

// Function that returns another function
function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeting("Hello");
console.log(sayHello("Bob")); // Outputs: Hello, Bob!

// Using built-in higher-order functions
const nums = [1, 2, 3, 4, 5];

// Using map to create a new array with squared values
const squares = nums.map((x) => x * x);
console.log(squares); // Outputs: [1, 4, 9, 16, 25]

// Using filter to create a new array with even numbers
const evens = nums.filter((x) => x % 2 === 0);
console.log(evens); // Outputs: [2, 4]

// Using reduce to sum all numbers in the array
const sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Outputs: 15
