// The call method invokes a function immediately, allowing you to specify the this context and pass arguments individually(comma, separated).
// The apply method is similar to call, but it accepts arguments as an array.
// The bind method returns a new function with a specified this context and optional preset arguments, without invoking it immediately.
// These methods are useful for controlling the execution context of functions, especially in scenarios involving callbacks or event handlers.
// Example usage:
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "Alice" };

// Using call
console.log(greet.call(person, "Hello", "!")); // Output: Hello, Alice!

// Using apply
console.log(greet.apply(person, ["Hi", "."])); // Output: Hi, Alice.

// Using bind
const greetAlice = greet.bind(person, "Hey");
console.log(greetAlice("?")); // Output: Hey, Alice?
