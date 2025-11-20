// Temporal Dead Zone (TDZ) in JavaScript
// Variables declared with let and const are in TDZ from the start of the block until the declaration is processed

function tdzExample() {
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 10;
  console.log(a); // Outputs: 10
}

tdzExample();

function tdzConstExample() {
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  const b = 20;
  console.log(b); // Outputs: 20
}

tdzConstExample();

// Variables declared with var are not in TDZ
function noTdzExample() {
  console.log(c); // Outputs: undefined
  var c = 30;
  console.log(c); // Outputs: 30
}

noTdzExample();
