import ConceptPage from "../../components/concept-page.component";

export default function ComponentsPage() {
  const sections = [
    {
      title: "What are Components?",
      content:
        "Components are independent, reusable pieces of UI. They accept inputs (called 'props') and return React elements that describe what should appear on screen. Components let you split the UI into independent, reusable pieces.",
    },
    {
      title: "Types of Components",
      content: "React has two main types of components:",
      points: [
        "Function Components: Simple JavaScript functions that return JSX",
        "Class Components: ES6 classes that extend React.Component (legacy)",
        "Modern React uses function components with hooks",
      ],
    },
    {
      title: "Function Components",
      content:
        "The simplest way to define a component is to write a JavaScript function:",
      code: `// Basic function component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Component with props
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Arrow function component
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

// Using components
function App() {
  return (
    <div>
      <Welcome />
      <Greeting name="John" />
      <Button text="Click Me" onClick={() => alert('Clicked!')} />
    </div>
  );
}`,
    },
    {
      title: "Component Composition",
      content:
        "Components can contain other components, creating a component tree:",
      code: `function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <Navigation />
    </header>
  );
}

function Navigation() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

function Sidebar() {
  return (
    <aside>
      <h3>Sidebar</h3>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
      </ul>
    </aside>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <Sidebar />
        <article>Main Content</article>
      </main>
      <Footer />
    </div>
  );
}`,
    },
    {
      title: "Component Props",
      content:
        "Props (short for properties) are arguments passed to components:",
      code: `// Component that receives props
function UserCard({ name, email, avatar, isOnline }) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
      {isOnline && <span className="online-badge">Online</span>}
    </div>
  );
}

// Using the component with props
function App() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "avatar.jpg",
    isOnline: true
  };
  
  return (
    <UserCard 
      name={user.name}
      email={user.email}
      avatar={user.avatar}
      isOnline={user.isOnline}
    />
  );
  
  // Or spread operator
  // return <UserCard {...user} />;
}`,
    },
    {
      title: "Default Props",
      content: "You can specify default values for props:",
      code: `function Button({ text, color, size }) {
  return (
    <button 
      style={{ 
        backgroundColor: color,
        fontSize: size === 'large' ? '18px' : '14px'
      }}
    >
      {text}
    </button>
  );
}

// Default props using default parameters
function Button2({ 
  text = "Click Me", 
  color = "blue", 
  size = "medium" 
}) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

// Usage
<Button text="Submit" />           // Uses default color and size
<Button text="Delete" color="red" /> // Overrides color`,
    },
    {
      title: "Children Prop",
      content:
        "The special 'children' prop allows components to wrap other content:",
      code: `function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Usage with children
function App() {
  return (
    <Card title="My Card">
      <p>This is the card content.</p>
      <button>Click Me</button>
    </Card>
  );
}

// Layout component with children
function Container({ children }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {children}
    </div>
  );
}`,
    },
    {
      title: "Component Best Practices",
      points: [
        "Keep components small and focused on a single responsibility",
        "Use descriptive names (PascalCase for component names)",
        "Extract reusable logic into custom hooks",
        "Avoid deeply nested component trees",
        "Use props for communication between components",
        "Keep state as close to where it's used as possible",
        "Prefer composition over inheritance",
      ],
    },
  ];

  const defaultCode = `// Try creating components
function Avatar({ src, name, size = 50 }) {
  return (
    <img 
      src={src} 
      alt={name}
      style={{
        width: size,
        height: size,
        borderRadius: '50%'
      }}
    />
  );
}

function UserProfile({ user }) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc',
      margin: '10px'
    }}>
      <Avatar src={user.avatar} name={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

function App() {
  const users = [
    { id: 1, name: 'John', email: 'john@test.com', 
      avatar: '👨', role: 'Developer' },
    { id: 2, name: 'Jane', email: 'jane@test.com', 
      avatar: '👩', role: 'Designer' }
  ];
  
  return (
    <div>
      <h1>Team Members</h1>
      {users.map(user => (
        <UserProfile key={user.id} user={user} />
      ))}
    </div>
  );
}

console.log("Component example ready!");`;

  return (
    <ConceptPage
      title="Components"
      description="Master React components - the building blocks of every React application."
      sections={sections}
      defaultCode={defaultCode}
    />
  );
}
