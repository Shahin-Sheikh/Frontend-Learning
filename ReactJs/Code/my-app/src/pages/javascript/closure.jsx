import ConceptPage from "../../components/concept-page.component";

export default function ClosurePage() {
  const sections = [
    {
      title: "What is a Closure?",
      content:
        "A closure is a function that has access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing. Closures allow functions to 'remember' the environment in which they were created.",
    },
    {
      title: "How Closures Work",
      content:
        "When a function is created, it captures references to all variables in its lexical scope. This creates a closure - a combination of the function and its lexical environment.",
      code: `function outer() {
  let count = 0; // This variable is 'closed over'
  
  function inner() {
    count++; // inner() has access to count
    console.log(count);
  }
  
  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3`,
    },
    {
      title: "Practical Uses",
      content: "Closures are fundamental to many JavaScript patterns:",
      points: [
        "Data Privacy: Creating private variables and methods",
        "Function Factories: Creating functions with preset parameters",
        "Event Handlers: Maintaining state in callbacks",
        "Currying: Creating specialized versions of functions",
        "Memoization: Caching function results",
      ],
    },
    {
      title: "Data Privacy Example",
      code: `function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500));  // 1500
console.log(account.withdraw(200)); // 1300
console.log(account.balance);       // undefined (private!)`,
    },
    {
      title: "Common Pitfalls",
      content: "Be careful with closures in loops:",
      code: `// Problem: All functions share the same 'i'
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 3, 3, 3
  }, 1000);
}

// Solution 1: Use let (block scope)
for (let j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log(j); // 0, 1, 2
  }, 1000);
}

// Solution 2: IIFE to create new scope
for (var k = 0; k < 3; k++) {
  (function(num) {
    setTimeout(function() {
      console.log(num); // 0, 1, 2
    }, 1000);
  })(k);
}`,
    },
  ];

  const defaultCode = `// Try closure examples
function makeMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Private counter
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getValue());  // 2`;

  return (
    <ConceptPage
      title="Closure"
      description="Master one of JavaScript's most powerful features - closures and lexical scoping."
      sections={sections}
      defaultCode={defaultCode}
    />
  );
}
