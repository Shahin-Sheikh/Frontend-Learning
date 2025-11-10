//Var is blocked or global scoped depending on where it was declared. Var can re-declare and updated within any scope.

function funcForVar() {
  var myName = "Test"; // Here var is blocked scoped as it's can be only accessiable within only this scope.
  console.log(myName);
}

var myName = ggh; // Here var is global scoped and can be access from any scope and re-declare and updated.
console.log(myName);
funcForVar();

//Let is new features of js ES6, let is blocked scoped and can only be accessibale and updated wihtin the same scope and can't be re-dclare within same scope.

function funcForLet() {
  var myName = "Test Let";
  if (myName == true) {
    let test = "Abc"; // This is blocked scoped and can't be accessiable outside this block
    console.log(test);
  }
  console.log(test);
  console.log(myName);
}

funcForLet();

// Const is also ES6 fetautes that behaves same as let except for update. Can't be update within any scope. Const is immutable.
const myName = "Shahin";

function funcForConst() {
  myName = "Test"; // Can't be updated or re-dclared
  console.log(myName);
}

funcForConst();
