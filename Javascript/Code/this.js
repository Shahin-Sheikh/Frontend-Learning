// The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run.
// Most typically, it is used in object methods, where this refers to the object that the method is attached to,
// thus allowing the same method to be reused on different objects.

const person = {
  name: "John",
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
};

console.log(person.greet()); // Output: Hello, my name is John
