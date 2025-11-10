function sum(...args) {
  console.log(args);
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}

sum(1, 2, 3);
