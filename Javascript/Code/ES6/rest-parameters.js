function sum(...args) {
  // Here ... is represent as rest param meaning it copying all the arguments as array that are passed in the function
  console.log(args);
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}

sum(1, 2, 3);
