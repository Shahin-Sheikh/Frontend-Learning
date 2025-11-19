function protoTypeChain() {
  function Person(name) {
    this.name = name;
  }
}

// Prototype chain is a series of links between objects that allows for inheritance of properties and methods.
// In JavaScript, every object has an internal link to another object called its prototype.
// When you try to access a property or method on an object, JavaScript first looks for it on the object itself.
// If it doesn't find it there, it looks for it on the object's prototype, and so on up the prototype chain until it finds the property/method or reaches the end of the chain (null).

// Example:
Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

var alice = new Person("Alice");
alice.greet(); // Output: Hello, my name is Alice

console.log(alice.toString()); // Inherited from Object.prototype

// The prototype chain allows for efficient memory usage and code reuse by enabling objects to share properties and methods through their prototypes.
