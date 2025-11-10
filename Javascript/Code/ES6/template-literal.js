function format(literals, ...substitutions) {
  let result = "";

  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i];
    result += substitutions[i];
  }
  // add the last literal
  result += literals[literals.length - 1];
  return result;
}

let quantity = 9,
  priceEach = 8.99,
  result = format`${quantity} items cost $${(quantity * priceEach).toFixed(
    2
  )}.`; // Example of using the format function with a template literal

console.log(result); // 9 items cost $80.91.
