import ConceptPage from "../../components/concept-page.component";

export default function ExecutionContextPage() {
  const sections = [
    {
      title: "What is Execution Context?",
      content:
        "Execution Context is an environment where JavaScript code is evaluated and executed. Every time a function is called, a new execution context is created. It contains information about the scope, variables, and the value of 'this'.",
    },
    {
      title: "Types of Execution Context",
      points: [
        "Global Execution Context (GEC): Created when the script first runs. There's only one GEC.",
        "Function Execution Context (FEC): Created whenever a function is called. Each function call creates a new FEC.",
        "Eval Execution Context: Created when code runs inside eval() function (rarely used).",
      ],
    },
    {
      title: "Phases of Execution Context",
      content: "Every execution context goes through two phases:",
      points: [
        "Creation Phase: Variables are hoisted, 'this' is bound, and the scope chain is created.",
        "Execution Phase: Code is executed line by line, variables are assigned values.",
      ],
    },
    {
      title: "Components of Execution Context",
      points: [
        "Variable Environment: Stores variable and function declarations",
        "Lexical Environment: Contains the local memory and reference to parent's lexical environment",
        "This Binding: Determines the value of 'this' keyword",
      ],
    },
    {
      title: "Example",
      code: `// Global Execution Context
var name = "Global";

function outer() {
  // Outer Function Execution Context
  var name = "Outer";
  
  function inner() {
    // Inner Function Execution Context
    var name = "Inner";
    console.log(name); // "Inner"
  }
  
  inner();
  console.log(name); // "Outer"
}

outer();
console.log(name); // "Global"`,
    },
    {
      title: "Call Stack",
      content:
        "JavaScript uses a Call Stack to manage execution contexts. When a function is called, its execution context is pushed onto the stack. When the function returns, its context is popped off the stack. The Global Execution Context is always at the bottom of the stack.",
    },
  ];

  const defaultCode = `// Try this execution context example
function first() {
  console.log("First function");
  second();
  console.log("First function again");
}

function second() {
  console.log("Second function");
  third();
  console.log("Second function again");
}

function third() {
  console.log("Third function");
}

console.log("Global start");
first();
console.log("Global end");

// Observe the call stack order in the console`;

  return (
    <ConceptPage
      title="Execution Context"
      description="Understanding how JavaScript executes code and manages scope through execution contexts."
      sections={sections}
      defaultCode={defaultCode}
    />
  );
}
