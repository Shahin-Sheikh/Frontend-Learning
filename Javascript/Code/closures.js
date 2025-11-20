// A closure is a function that remembers the environment in which it was created.
// It can access variables from its outer scope even after that scope has finished executing.

var createCounter = function (n) {
  return function () {
    return n++;
  };
};

var counter = createCounter(0);
console.log(counter()); // Outputs: 0
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2

var counter2 = createCounter(10);
console.log(counter2()); // Outputs: 10
console.log(counter2()); // Outputs: 11
console.log(counter2()); // Outputs: 12
