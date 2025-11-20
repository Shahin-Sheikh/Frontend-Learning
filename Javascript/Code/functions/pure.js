// Pure function is a function where the return value is only determined by its input values, without observable side effects
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
// Outputs: 5

function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5));
// Outputs: 20

function square(x) {
  return x * x;
}

console.log(square(6));
// Outputs: 36
