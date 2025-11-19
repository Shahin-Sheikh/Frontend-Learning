function createMachine(name, status) {
  return {
    name,
    status,
  };
}

console.log(createMachine("Computer", "Active"));

// Ways of creating object literals in ES6
// Object Literal Syntax
var object = {
  name: "Shahin",
  age: 24,
};

// Object Constructor Syntax
var object = new Object();

// Object.create() Method
var object = Object.create(Object.prototype);

// Object is simple name and value pairs
