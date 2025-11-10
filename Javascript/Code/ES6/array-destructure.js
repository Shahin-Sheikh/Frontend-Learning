function getScores() {
  return [70, 80, 90, 100, 200, 300];
}

let [...args] = getScores(); // Array destructuring with rest operator

console.log({ args });
