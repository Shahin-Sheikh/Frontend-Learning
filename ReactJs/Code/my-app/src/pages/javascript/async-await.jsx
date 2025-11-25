import ConceptPage from "../../components/concept-page.component";

export default function AsyncAwaitPage() {
  const sections = [
    {
      title: "What is Async/Await?",
      content:
        "Async/Await is syntactic sugar built on top of Promises that makes asynchronous code look and behave more like synchronous code. It provides a cleaner, more readable way to work with promises without chaining .then() calls.",
    },
    {
      title: "The async Keyword",
      content:
        "The 'async' keyword is used to declare an asynchronous function. An async function always returns a Promise, even if you return a regular value.",
      code: `// Async function always returns a Promise
async function greet() {
  return "Hello"; // Automatically wrapped in Promise.resolve()
}

greet().then(msg => console.log(msg)); // "Hello"

// Equivalent to:
function greetPromise() {
  return Promise.resolve("Hello");
}`,
    },
    {
      title: "The await Keyword",
      content:
        "The 'await' keyword can only be used inside async functions. It pauses the execution of the async function and waits for the Promise to resolve, then returns the resolved value.",
      code: `async function fetchData() {
  console.log("Fetching...");
  
  // Wait for promise to resolve
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();
  
  console.log("Data received:", json);
  return json;
}

fetchData();`,
    },
    {
      title: "Error Handling",
      content:
        "Use try/catch blocks to handle errors in async/await code, just like synchronous code:",
      code: `async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw if you want caller to handle
  } finally {
    console.log('Cleanup operations');
  }
}`,
    },
    {
      title: "Sequential vs Parallel Execution",
      content:
        "Understanding when to use sequential and parallel async operations:",
      code: `// Sequential (slower - waits for each)
async function sequential() {
  const result1 = await delay(1000, 'First');
  const result2 = await delay(1000, 'Second');
  return [result1, result2]; // Takes 2 seconds
}

// Parallel (faster - runs simultaneously)
async function parallel() {
  const promise1 = delay(1000, 'First');
  const promise2 = delay(1000, 'Second');
  
  const results = await Promise.all([promise1, promise2]);
  return results; // Takes 1 second
}

// Or using destructuring
async function parallelDestructure() {
  const [result1, result2] = await Promise.all([
    delay(1000, 'First'),
    delay(1000, 'Second')
  ]);
  return [result1, result2];
}`,
    },
    {
      title: "Common Patterns",
      content: "Useful async/await patterns:",
      code: `// 1. Async IIFE (Immediately Invoked Function)
(async () => {
  const data = await fetchData();
  console.log(data);
})();

// 2. Top-level await (ES2022 in modules)
const data = await fetchData();

// 3. Async array operations
async function processItems(items) {
  // Process sequentially
  for (const item of items) {
    await processItem(item);
  }
  
  // Process in parallel
  const results = await Promise.all(
    items.map(item => processItem(item))
  );
  
  return results;
}`,
    },
    {
      title: "Benefits Over Promises",
      points: [
        "More readable and easier to understand",
        "Easier error handling with try/catch",
        "Better debugging - preserves stack traces",
        "Conditional logic is simpler",
        "Works well with loops and iterations",
      ],
    },
  ];

  const defaultCode = `// Try async/await examples
const delay = (ms, value) => 
  new Promise(resolve => setTimeout(() => resolve(value), ms));

// Sequential execution
async function sequential() {
  console.log("Sequential start");
  const a = await delay(1000, "A");
  console.log(a);
  const b = await delay(1000, "B");
  console.log(b);
  return [a, b];
}

// Parallel execution
async function parallel() {
  console.log("\\nParallel start");
  const [a, b] = await Promise.all([
    delay(1000, "A"),
    delay(1000, "B")
  ]);
  console.log(a, b);
  return [a, b];
}

// Error handling
async function withErrorHandling() {
  try {
    await delay(500, "Success");
    console.log("\\nOperation succeeded");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Run examples
sequential();
parallel();
withErrorHandling();`;

  return (
    <ConceptPage
      title="Async/Await"
      description="Master modern asynchronous JavaScript with async/await syntax."
      sections={sections}
      defaultCode={defaultCode}
    />
  );
}
