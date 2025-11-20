// Currying is a technique of evaluating a function with multiple arguments as a sequence of functions with a single argument

const curryingFunction = (a) => (b) => (c) => {
  return a + b + c;
};

console.log(curryingFunction(1)(2)(3)); // Outputs: 6
