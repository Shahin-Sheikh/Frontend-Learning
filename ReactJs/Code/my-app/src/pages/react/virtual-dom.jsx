import ConceptPage from "../../components/concept-page.component";
import { virtualDOMCode } from "../../data/hook-code-snippets";

export default function VirtualDOMPage() {
  const sections = [
    {
      title: "What is the Virtual DOM?",
      content:
        "The Virtual DOM is a lightweight JavaScript representation of the actual DOM. React maintains this in-memory tree structure and uses it to determine what changes need to be made to the real DOM. This approach makes React fast and efficient.",
    },
    {
      title: "Why Virtual DOM?",
      content:
        "Direct DOM manipulation is slow because it triggers browser reflows and repaints. The Virtual DOM solves this by:",
      points: [
        "Batching multiple DOM updates into a single operation",
        "Calculating the minimal set of changes needed",
        "Updating only what changed, not the entire tree",
        "Keeping the UI in sync with application state efficiently",
        "Providing a declarative API (you describe what, React handles how)",
      ],
    },
    {
      title: "How Virtual DOM Works",
      content: "React's Virtual DOM process happens in three main steps:",
      code: `// Step 1: Initial Render
const vdom1 = {
  type: 'div',
  props: {
    children: [
      { type: 'h1', props: { children: 'Hello' } },
      { type: 'p', props: { children: 'Count: 0' } }
    ]
  }
};

// Step 2: State Change - New Virtual DOM
const vdom2 = {
  type: 'div',
  props: {
    children: [
      { type: 'h1', props: { children: 'Hello' } }, // Same
      { type: 'p', props: { children: 'Count: 1' } } // Changed!
    ]
  }
};

// Step 3: Reconciliation (Diffing)
// React compares vdom1 and vdom2
// Finds only <p> text changed
// Updates ONLY that text node in real DOM`,
    },
    {
      title: "The Reconciliation Process",
      content:
        "React uses a sophisticated diffing algorithm to compare Virtual DOM trees:",
      points: [
        "Elements of different types: Destroys old tree and builds new one",
        "Same type elements: Updates only changed attributes",
        "Child elements: Uses keys to match children efficiently",
        "Component updates: Re-renders component and reconciles children",
        "Time complexity: O(n) instead of O(n³) for tree comparison",
      ],
    },
    {
      title: "Real vs Virtual DOM Update",
      code: `// WITHOUT Virtual DOM (Direct manipulation)
// Every change triggers full DOM update
function updateUI(count) {
  // Browser reflows and repaints entire element
  document.getElementById('root').innerHTML = \`
    <div>
      <h1>Hello</h1>
      <p>Count: \${count}</p>
      <button>Increment</button>
    </div>
  \`;
  // Re-attach event listeners (expensive!)
  document.querySelector('button').onclick = handleClick;
}

// WITH Virtual DOM (React)
function Counter() {
  const [count, setCount] = useState(0);
  
  // React updates only the changed text node
  return (
    <div>
      <h1>Hello</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
  // React diffs and updates ONLY <p>'s text!
}`,
    },
    {
      title: "Key Prop Importance",
      content:
        "Keys help React identify which items changed, were added, or removed:",
      code: `// ❌ Bad - Using index as key
function BadList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
  // Problem: Reordering breaks reconciliation
}

// ✅ Good - Using stable unique ID
function GoodList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  // React can track each item correctly
}

// Example of why index keys fail:
// Initial: ['A', 'B', 'C'] with keys [0, 1, 2]
// After adding 'D' at start: ['D', 'A', 'B', 'C']
// Keys become [0, 1, 2, 3]
// React thinks: 0 changed from 'A' to 'D'
//               1 changed from 'B' to 'A'
//               2 changed from 'C' to 'B'
//               3 is new 'C'
// Result: Re-renders ALL items instead of just adding one!`,
    },
    {
      title: "Virtual DOM Benefits",
      points: [
        "Performance: Batch updates and minimize DOM operations",
        "Cross-platform: Same approach works for React Native",
        "Predictable: Declarative API makes code easier to reason about",
        "Developer Experience: Focus on state, not DOM manipulation",
        "Time-travel debugging: Can replay state changes",
      ],
    },
    {
      title: "Common Misconceptions",
      content: "Understanding what Virtual DOM is NOT:",
      points: [
        "NOT always faster than direct DOM (depends on use case)",
        "NOT a shadow DOM (different browser feature)",
        "NOT eliminating DOM operations (just optimizing them)",
        "NOT magic - still follows JavaScript execution model",
        "Virtual DOM is about making development easier and more predictable",
      ],
    },
    {
      title: "React Fiber Architecture",
      content:
        "Modern React (16+) uses Fiber - an improved Virtual DOM implementation:",
      points: [
        "Incremental rendering: Can pause and resume work",
        "Priority-based updates: High-priority updates (user input) first",
        "Concurrent rendering: Better performance for complex UIs",
        "Error boundaries: Graceful error handling",
        "Suspense: Handle async operations declaratively",
      ],
    },
  ];

  return (
    <ConceptPage
      title="Virtual DOM"
      description="Understand React's Virtual DOM - the secret behind its performance and declarative nature."
      sections={sections}
      codeSnippet={virtualDOMCode}
      filename="virtual-dom-example.jsx"
    />
  );
}
