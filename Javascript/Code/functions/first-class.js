// First class functions in JavaScript
// Functions can be treated like any other variable

// Function assigned to a variable
const greet = function (name) {
  return `Hello, ${name}!`;
};

// Function passed as an argument
function processUserInput(callback) {
  const name = "Alice";
  console.log(callback(name));
}

processUserInput(greet);

// Function returned from another function
function makeMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
console.log(double(5)); // Outputs: 10

// Storing functions in an array
const operations = [
  function (x) {
    return x + 1;
  },
  function (x) {
    return x * 2;
  },
  function (x) {
    return x - 3;
  },
];

let value = 5;
operations.forEach((op) => {
  value = op(value);
});
console.log(value); // Outputs: 9

// Storing functions in an object
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

console.log(calculator.add(10, 5)); // Outputs: 15
console.log(calculator.multiply(10, 5)); // Outputs: 50
