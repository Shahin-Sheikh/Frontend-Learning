import ConceptPage from "../../components/concept-page.component";
import { customHooksCode } from "../../data/hook-code-snippets";

export default function CustomHooksPage() {
  const sections = [
    {
      title: "What are Custom Hooks?",
      content:
        "Custom Hooks are JavaScript functions that use React Hooks and allow you to extract component logic into reusable functions. They follow the naming convention 'use' prefix and can call other hooks.",
    },
    {
      title: "Why Create Custom Hooks?",
      points: [
        "Reusability: Share logic across multiple components",
        "Separation of Concerns: Extract complex logic from components",
        "Testability: Test logic independently from components",
        "Readability: Make components cleaner and focused",
        "Composition: Combine multiple hooks into one",
      ],
    },
    {
      title: "Rules for Custom Hooks",
      points: [
        "Must start with 'use' prefix (useCustomHook)",
        "Can call other React hooks (useState, useEffect, etc.)",
        "Can accept parameters and return values",
        "Follow all rules of hooks (no conditionals, loops)",
        "Each component using the hook gets isolated state",
      ],
    },
    {
      title: "Simple Custom Hook - useToggle",
      code: `// Custom hook definition
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  
  return [value, toggle];
}

// Usage in components
function ToggleExample() {
  const [isOn, toggleIsOn] = useToggle(false);
  const [isVisible, toggleVisible] = useToggle(true);
  
  return (
    <div>
      <p>Switch is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggleIsOn}>Toggle Switch</button>
      
      {isVisible && <p>This text is visible</p>}
      <button onClick={toggleVisible}>Toggle Visibility</button>
    </div>
  );
}`,
    },
    {
      title: "useLocalStorage Hook",
      code: `function useLocalStorage(key, initialValue) {
  // Get from localStorage or use initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  // Update localStorage when value changes
  const setValue = (value) => {
    try {
      const valueToStore = 
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', 'Guest');
  
  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Stored: {name}</p>
    </div>
  );
}`,
    },
    {
      title: "useFetch Hook",
      code: `function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(
    \`https://api.example.com/users/\${userId}\`
  );
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return <div>User: {data.name}</div>;
}`,
    },
    {
      title: "useDebounce Hook",
      code: `function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

// Usage - Search with debounce
function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  
  useEffect(() => {
    if (debouncedSearch) {
      // API call only after user stops typing for 500ms
      console.log('Searching for:', debouncedSearch);
    }
  }, [debouncedSearch]);
  
  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}`,
    },
    {
      title: "useWindowSize Hook",
      code: `function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
}

// Usage - Responsive component
function ResponsiveComponent() {
  const { width } = useWindowSize();
  
  return (
    <div>
      <p>Window width: {width}px</p>
      {width < 768 ? (
        <p>Mobile View</p>
      ) : (
        <p>Desktop View</p>
      )}
    </div>
  );
}`,
    },
    {
      title: "usePrevious Hook",
      code: `function usePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}

// Usage - Compare current and previous values
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  
  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
    },
    {
      title: "Best Practices",
      points: [
        "Keep hooks simple and focused on one concern",
        "Document your custom hooks with JSDoc comments",
        "Return arrays for ordered values [value, setValue]",
        "Return objects for named values { data, loading, error }",
        "Handle cleanup in useEffect to prevent memory leaks",
        "Make hooks flexible with parameters",
        "Test custom hooks in isolation",
      ],
    },
  ];

  return (
    <ConceptPage
      title="Custom Hooks"
      description="Learn to create reusable custom hooks to share logic across React components."
      sections={sections}
      codeSnippet={customHooksCode}
      filename="custom-hooks-example.jsx"
    />
  );
}
