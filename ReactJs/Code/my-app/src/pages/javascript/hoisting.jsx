import ConceptPage from "../../components/concept-page.component";

export default function HoistingPage() {
  const sections = [
    {
      title: "What is Hoisting?",
      content:
        "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function) during the creation phase of the execution context. This means you can use variables and functions before they are declared in your code.",
    },
    {
      title: "Variable Hoisting",
      content:
        "Variables declared with 'var' are hoisted and initialized with 'undefined'. Variables declared with 'let' and 'const' are hoisted but not initialized, creating a Temporal Dead Zone (TDZ).",
      code: `// var hoisting
console.log(x); // undefined (not ReferenceError)
var x = 5;
console.log(x); // 5

// let/const hoisting
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;`,
    },
    {
      title: "Function Hoisting",
      content:
        "Function declarations are completely hoisted - both the name and the body. Function expressions are treated as variable assignments.",
      code: `// Function declaration - fully hoisted
sayHello(); // "Hello!" - Works!
function sayHello() {
  console.log("Hello!");
}

// Function expression - NOT hoisted
sayGoodbye(); // TypeError: sayGoodbye is not a function
var sayGoodbye = function() {
  console.log("Goodbye!");
};`,
    },
    {
      title: "How Hoisting Works",
      content:
        "During the creation phase, JavaScript engine scans the code and allocates memory for variables and functions:",
      points: [
        "Function declarations: Entire function is stored in memory",
        "var variables: Initialized with undefined",
        "let/const variables: Declared but uninitialized (TDZ)",
        "Function expressions: Treated as variable assignments",
      ],
    },
    {
      title: "Best Practices",
      points: [
        "Always declare variables at the top of their scope",
        "Use 'let' and 'const' instead of 'var' to avoid confusion",
        "Declare functions before calling them for better readability",
        "Be aware of the Temporal Dead Zone with let/const",
      ],
    },
  ];

  const defaultCode = `// Experiment with hoisting
console.log("=== Variable Hoisting ===");
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// Uncomment to see TDZ error:
// console.log(b); // ReferenceError
let b = 20;
console.log(b); // 20

console.log("\\n=== Function Hoisting ===");
greet(); // Works!
function greet() {
  console.log("Hello from hoisted function!");
}

// sayBye(); // Uncomment to see error
var sayBye = function() {
  console.log("Goodbye!");
};
sayBye(); // Works here`;

  return (
    <ConceptPage
      title="Hoisting"
      description="Learn how JavaScript moves declarations to the top of their scope and why it matters."
      sections={sections}
      defaultCode={defaultCode}
    />
  );
}
