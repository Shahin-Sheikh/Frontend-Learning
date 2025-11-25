import ConceptPage from "../../components/concept-page.component";

export default function PropsPage() {
  const sections = [
    {
      title: "What are Props?",
      content:
        "Props (short for properties) are read-only inputs passed from parent to child components. They allow data to flow down the component tree and make components reusable by configuring them differently.",
    },
    {
      title: "Passing Props",
      content: "Props are passed to components like HTML attributes:",
      code: `// Parent component passing props
function App() {
  return (
    <div>
      <Welcome name="John" age={25} />
      <Welcome name="Jane" age={30} />
    </div>
  );
}

// Child component receiving props
function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

// Destructuring props (preferred)
function Welcome({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}`,
    },
    {
      title: "Props are Read-Only",
      content:
        "Components must never modify their own props. They are immutable:",
      code: `// ❌ WRONG: Never modify props
function Profile(props) {
  props.name = "Changed"; // Error! Props are read-only
  return <h1>{props.name}</h1>;
}

// ✅ CORRECT: Props should be treated as read-only
function Profile({ name }) {
  // Use props as-is, don't modify them
  return <h1>{name}</h1>;
}

// If you need to modify data, use state
function Profile({ initialName }) {
  const [name, setName] = useState(initialName);
  
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("New Name")}>
        Change Name
      </button>
    </div>
  );
}`,
    },
    {
      title: "Different Types of Props",
      content: "Props can be any valid JavaScript value:",
      code: `function DisplayData({
  // Primitive types
  text,           // string
  count,          // number
  isActive,       // boolean
  value,          // null/undefined
  
  // Complex types
  user,           // object
  items,          // array
  onAction,       // function
  component,      // React component
  
  // JSX elements
  children,       // special prop for nested content
  icon            // JSX element
}) {
  return (
    <div>
      <p>{text}</p>
      <span>{count}</span>
      {isActive && <span>Active</span>}
      <h3>{user.name}</h3>
      {items.map(item => <li key={item}>{item}</li>)}
      <button onClick={onAction}>Click</button>
      {icon}
      {children}
    </div>
  );
}

// Usage
<DisplayData
  text="Hello"
  count={42}
  isActive={true}
  user={{ name: "John", age: 25 }}
  items={["a", "b", "c"]}
  onAction={() => console.log("clicked")}
  icon={<span>🎉</span>}
>
  <p>Children content here</p>
</DisplayData>`,
    },
    {
      title: "Default Props",
      content: "Provide default values for props that might not be passed:",
      code: `// Using default parameters
function Button({ 
  text = "Click Me", 
  color = "blue",
  disabled = false 
}) {
  return (
    <button 
      disabled={disabled}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

// Usage
<Button />                          // Uses all defaults
<Button text="Submit" />            // Overrides text only
<Button color="red" disabled />     // Overrides multiple

// Object destructuring with defaults
function Card({ 
  title = "Default Title",
  content = "",
  footer = null
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content || "No content"}</p>
      {footer && <footer>{footer}</footer>}
    </div>
  );
}`,
    },
    {
      title: "Spreading Props",
      content:
        "Pass all properties of an object as props using the spread operator:",
      code: `function UserCard({ name, email, age, location }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

// Instead of passing each prop individually
const user = {
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  location: "New York"
};

// ❌ Verbose way
<UserCard 
  name={user.name}
  email={user.email}
  age={user.age}
  location={user.location}
/>

// ✅ Better: Spread props
<UserCard {...user} />

// Combining spread with additional props
<UserCard {...user} verified={true} />`,
    },
    {
      title: "Children Prop",
      content: "The children prop allows components to receive nested content:",
      code: `// Component that accepts children
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Usage with different children
<Card title="Profile">
  <p>User information</p>
  <button>Edit</button>
</Card>

<Card title="Gallery">
  <img src="photo1.jpg" />
  <img src="photo2.jpg" />
</Card>

// Multiple children are automatically put in array
function Container({ children }) {
  return <div>{children}</div>;
}

<Container>
  <p>First child</p>
  <p>Second child</p>
  <p>Third child</p>
</Container>`,
    },
    {
      title: "Props Validation",
      content:
        "While not enforced, documenting expected props helps prevent bugs:",
      code: `// Using TypeScript (recommended)
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

function Button({ text, onClick, disabled, variant }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}

// Using PropTypes (legacy but still used)
import PropTypes from 'prop-types';

function User({ name, age, email }) {
  return <div>{name}, {age}, {email}</div>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string
};

User.defaultProps = {
  email: 'N/A'
};`,
    },
  ];

  const defaultCode = `// Try working with props
function ProductCard({ 
  name, 
  price, 
  discount = 0,
  inStock = true,
  onBuy 
}) {
  const finalPrice = price - (price * discount / 100);
  
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '15px',
      margin: '10px',
      borderRadius: '8px'
    }}>
      <h3>{name}</h3>
      <p>
        Price: $
        {discount > 0 ? (
          <>
            <span style={{ textDecoration: 'line-through' }}>
              {price}
            </span>{' '}
            <span style={{ color: 'red' }}>
              {finalPrice.toFixed(2)}
            </span>
          </>
        ) : (
          price
        )}
      </p>
      <p>Status: {inStock ? '✅ In Stock' : '❌ Out of Stock'}</p>
      <button 
        onClick={onBuy}
        disabled={!inStock}
      >
        {inStock ? 'Buy Now' : 'Sold Out'}
      </button>
    </div>
  );
}

// Using the component
const products = [
  { id: 1, name: 'Laptop', price: 999, discount: 10, inStock: true },
  { id: 2, name: 'Mouse', price: 25, inStock: false }
];

products.forEach(product => {
  console.log(\`\${product.name}: $\${product.price}\`);
});`;

  return (
    <ConceptPage
      title="Props"
      description="Learn how to pass data between React components using props."
      sections={sections}
      defaultCode={defaultCode}
    />
  );
}
