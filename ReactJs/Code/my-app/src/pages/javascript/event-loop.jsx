import ConceptPage from "../../components/concept-page.component";

export default function EventLoopPage() {
  const sections = [
    {
      title: "What is the Event Loop?",
      content:
        "The Event Loop is JavaScript's mechanism for handling asynchronous operations. It allows JavaScript to perform non-blocking operations despite being single-threaded by using a callback queue and continuously checking if the call stack is empty.",
    },
    {
      title: "JavaScript Runtime Components",
      points: [
        "Call Stack: Executes synchronous code (LIFO - Last In First Out)",
        "Web APIs: Browser-provided APIs (setTimeout, DOM events, fetch, etc.)",
        "Callback Queue (Task Queue): Stores callbacks from async operations",
        "Microtask Queue: Stores Promise callbacks (higher priority)",
        "Event Loop: Monitors call stack and queues, moves callbacks to stack",
      ],
    },
    {
      title: "How Event Loop Works",
      content:
        "The event loop continuously checks if the call stack is empty. When empty, it takes the first task from the microtask queue (promises), then from the callback queue (setTimeout, events), and pushes it to the call stack.",
      code: `console.log("1: Start");

setTimeout(() => {
  console.log("2: Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise");
});

console.log("4: End");

// Output order:
// 1: Start
// 4: End
// 3: Promise (microtask - higher priority)
// 2: Timeout (macrotask)`,
    },
    {
      title: "Microtasks vs Macrotasks",
      content: "Understanding task priorities is crucial:",
      points: [
        "Microtasks: Promises (.then, .catch), queueMicrotask, MutationObserver",
        "Macrotasks: setTimeout, setInterval, setImmediate, I/O operations",
        "Microtasks execute BEFORE macrotasks in each event loop cycle",
        "All microtasks are processed before any macrotask",
      ],
    },
    {
      title: "Complex Example",
      code: `console.log("Script start");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return Promise.resolve();
  })
  .then(() => {
    console.log("Promise 2");
  });

setTimeout(() => {
  console.log("setTimeout 2");
  Promise.resolve().then(() => {
    console.log("Promise in setTimeout");
  });
}, 0);

console.log("Script end");

// Output:
// Script start
// Script end
// Promise 1
// Promise 2
// setTimeout 1
// setTimeout 2
// Promise in setTimeout`,
    },
    {
      title: "Why This Matters",
      points: [
        "Prevents UI blocking in web applications",
        "Enables concurrent-like behavior in single-threaded JavaScript",
        "Critical for understanding async/await and Promise behavior",
        "Helps debug timing issues in asynchronous code",
      ],
    },
  ];

  const defaultCode = `// Experiment with Event Loop
console.log("=== Synchronous ===");
console.log("1");
console.log("2");

console.log("\\n=== Async with setTimeout ===");
setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);

console.log("\\n=== Promises (Microtasks) ===");
Promise.resolve()
  .then(() => console.log("Promise 1"))
  .then(() => console.log("Promise 2"));

console.log("\\n=== Mixed ===");
setTimeout(() => console.log("Timeout 3"), 0);
Promise.resolve().then(() => console.log("Promise 3"));
console.log("Synchronous 3");

// Try to predict the order!`;

  return (
    <ConceptPage
      title="Event Loop"
      description="Understand how JavaScript handles asynchronous operations with the Event Loop mechanism."
      sections={sections}
      defaultCode={defaultCode}
    />
  );
}
