import ConceptPage from "../../components/concept-page.component";

export default function HigherOrderFunctionPage() {
  const sections = [
    {
      title: "What is a Higher-Order Function?",
      content:
        "A Higher-Order Function (HOF) is a function that either takes one or more functions as arguments, or returns a function as its result, or both. HOFs are a fundamental concept in functional programming and are extensively used in JavaScript.",
    },
    {
      title: "Taking Functions as Arguments",
      content: "The most common use of HOFs - passing functions as parameters:",
      code: `// Array methods are HOFs
const numbers = [1, 2, 3, 4, 5];

// map takes a function as argument
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter takes a function as argument
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Custom HOF
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log); // 0, 1, 2`,
    },
    {
      title: "Returning Functions",
      content: "HOFs can create and return new functions:",
      code: `// Function factory
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Greeting factory
function createGreeter(greeting) {
  return function(name) {
    return \`\${greeting}, \${name}!\`;
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

console.log(sayHello("John")); // "Hello, John!"
console.log(sayHi("Jane"));    // "Hi, Jane!"`,
    },
    {
      title: "Common Built-in HOFs",
      content: "JavaScript provides many built-in higher-order functions:",
      points: [
        "Array.map() - Transform each element",
        "Array.filter() - Select elements based on condition",
        "Array.reduce() - Reduce array to single value",
        "Array.forEach() - Execute function for each element",
        "Array.sort() - Sort with custom comparator",
        "setTimeout() - Execute function after delay",
        "addEventListener() - Execute function on event",
      ],
    },
    {
      title: "Practical Examples",
      code: `// 1. Function composition
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const addOne = x => x + 1;
const double = x => x * 2;

const doubleThenAddOne = compose(addOne, double);
console.log(doubleThenAddOne(3)); // 7 (3 * 2 + 1)

// 2. Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

const search = debounce((term) => {
  console.log("Searching for:", term);
}, 300);

// 3. Once function
function once(func) {
  let called = false;
  let result;
  
  return function(...args) {
    if (!called) {
      called = true;
      result = func(...args);
    }
    return result;
  };
}

const initialize = once(() => {
  console.log("Initialized!");
  return "Setup complete";
});`,
    },
    {
      title: "Benefits of HOFs",
      points: [
        "Code Reusability: Abstract common patterns",
        "Composition: Build complex operations from simple ones",
        "Readability: Express intent clearly",
        "Maintainability: Separate concerns",
        "Functional Programming: Enable functional paradigms",
      ],
    },
  ];

  const defaultCode = `// Try higher-order functions
// 1. Simple HOF
function operate(a, b, operation) {
  return operation(a, b);
}

console.log(operate(5, 3, (x, y) => x + y)); // 8
console.log(operate(5, 3, (x, y) => x * y)); // 15

// 2. Function factory
function createMultiplier(multiplier) {
  return num => num * multiplier;
}

const times2 = createMultiplier(2);
const times10 = createMultiplier(10);

console.log(times2(5));   // 10
console.log(times10(5));  // 50

// 3. Array HOFs
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(n => n % 2 === 0)  // [2, 4]
  .map(n => n * n)            // [4, 16]
  .reduce((sum, n) => sum + n, 0); // 20

console.log("Result:", result);`;

  return (
    <ConceptPage
      title="Higher Order Function"
      description="Learn how functions can take and return other functions - a cornerstone of JavaScript."
      sections={sections}
      defaultCode={defaultCode}
    />
  );
}
