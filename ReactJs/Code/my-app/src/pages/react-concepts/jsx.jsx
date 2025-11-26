import ConceptPage from "../../components/concept-page.component";
import { jsxCode } from "../../data/hook-code-snippets";

export default function JSXPage() {
  const sections = [
    {
      title: "What is JSX?",
      content:
        "JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup inside JavaScript files. It was created by Facebook for React and makes it easier to create UI components by combining markup with logic.",
    },
    {
      title: "Why Use JSX?",
      points: [
        "Intuitive: Looks like HTML but with JavaScript power",
        "Type Safety: Catches errors at compile time",
        "Performance: Optimized by React compiler",
        "Full JavaScript: Use any JS expression inside JSX",
        "Component-based: Encourages reusable UI components",
      ],
    },
    {
      title: "JSX Basics",
      content:
        "JSX elements look like HTML but are transformed into JavaScript function calls:",
      code: `// JSX syntax
const element = <h1>Hello, World!</h1>;

// Compiles to:
const element = React.createElement('h1', null, 'Hello, World!');

// JSX with attributes
const img = <img src="photo.jpg" alt="My Photo" />;

// JSX with expressions
const name = "John";
const greeting = <h1>Hello, {name}!</h1>;

// JSX with multiple elements (needs wrapper)
const card = (
  <div className="card">
    <h2>Title</h2>
    <p>Description</p>
  </div>
);`,
    },
    {
      title: "JavaScript Expressions in JSX",
      content:
        "Any valid JavaScript expression can be embedded in JSX using curly braces {}:",
      code: `const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

const profile = (
  <div>
    <h1>{user.firstName} {user.lastName}</h1>
    <p>Age: {user.age}</p>
    <p>{user.age >= 18 ? 'Adult' : 'Minor'}</p>
    <p>Born in: {2024 - user.age}</p>
    <button onClick={() => alert('Hello!')}>
      Click Me
    </button>
  </div>
);`,
    },
    {
      title: "JSX Attributes",
      content:
        "JSX attributes use camelCase naming convention instead of HTML attribute names:",
      code: `// HTML attributes in JSX use camelCase
<div className="container" />  // not 'class'
<label htmlFor="name" />       // not 'for'
<button onClick={handleClick}> // not 'onclick'

// Style attribute takes an object
<div style={{
  backgroundColor: 'blue',     // not 'background-color'
  fontSize: '16px',
  padding: '10px'
}} />

// Data attributes stay lowercase
<div data-id="123" data-name="test" />

// Boolean attributes
<input disabled />              // true
<input disabled={false} />      // false
<input required={isRequired} /> // conditional`,
    },
    {
      title: "JSX Children",
      content: "JSX can contain children elements, text, or expressions:",
      code: `// Text children
const heading = <h1>Hello World</h1>;

// Element children
const list = (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
);

// Expression children
const numbers = [1, 2, 3, 4, 5];
const listItems = (
  <ul>
    {numbers.map(num => (
      <li key={num}>{num * 2}</li>
    ))}
  </ul>
);

// Mixed children
const card = (
  <div>
    <h2>Title</h2>
    {isLoggedIn && <p>Welcome back!</p>}
    {items.length > 0 ? (
      <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>
    ) : (
      <p>No items found</p>
    )}
  </div>
);`,
    },
    {
      title: "JSX vs HTML Differences",
      points: [
        "className instead of class",
        "htmlFor instead of for",
        "camelCase event handlers (onClick, onChange)",
        "style takes an object, not a string",
        "self-closing tags must have / (<img />, <input />)",
        "Comments use {/* comment */} syntax",
        "Return single root element (or use Fragment)",
      ],
    },
    {
      title: "Fragments",
      content:
        "Use Fragments to group elements without adding extra DOM nodes:",
      code: `// Long syntax
const list = (
  <React.Fragment>
    <li>Item 1</li>
    <li>Item 2</li>
  </React.Fragment>
);

// Short syntax
const list2 = (
  <>
    <li>Item 1</li>
    <li>Item 2</li>
  </>
);

// Fragment with key (for lists)
const items = data.map(item => (
  <React.Fragment key={item.id}>
    <dt>{item.term}</dt>
    <dd>{item.description}</dd>
  </React.Fragment>
));`,
    },
  ];

  return (
    <ConceptPage
      title="JSX"
      description="Learn JSX - the syntax extension that makes React components intuitive and powerful."
      sections={sections}
      codeSnippet={jsxCode}
      filename="jsx-example.jsx"
    />
  );
}
