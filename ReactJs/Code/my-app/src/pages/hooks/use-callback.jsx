import { useCallback, useState, memo } from "react";
import ModalComponent from "../../components/modal.component";
import HookCodeEditor from "../../components/hook-code-editor.component";

const defaultCode = `// useCallback Hook Example
// Memoize functions to prevent re-creation

let functionCallCount = 0;

function createHandler() {
  functionCallCount++;
  console.log("Handler created:", functionCallCount, "times");
  
  return function handleClick() {
    console.log("Button clicked!");
  };
}

// Without memoization
const handler1 = createHandler();
const handler2 = createHandler();
const handler3 = createHandler();

console.log("Same function?", handler1 === handler2);
console.log("Total creations:", functionCallCount);`;

// Memoized child component - only re-renders when props change
const Button = memo(({ onClick, children }) => {
  console.log(`🔄 ${children} button rendered`);
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        borderRadius: "8px",
        border: "2px solid #333",
        backgroundColor: "#845ef7",
        color: "white",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </button>
  );
});

const ListItem = memo(({ item, onRemove }) => {
  console.log(`🔄 Item ${item.id} rendered`);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px",
        backgroundColor: "white",
        borderRadius: "8px",
        border: "2px solid #333",
      }}
    >
      <span style={{ fontSize: "16px", fontWeight: "500" }}>{item.text}</span>
      <button
        onClick={() => onRemove(item.id)}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          border: "2px solid #333",
          backgroundColor: "#ff6b6b",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Remove
      </button>
    </div>
  );
});

export default function UseCallbackHook() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Master Hooks" },
    { id: 3, text: "Build Apps" },
  ]);
  const [inputValue, setInputValue] = useState("");

  // With useCallback - function is memoized
  const incrementWithCallback = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrementWithCallback = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  // Memoized function for removing items
  const handleRemoveItem = useCallback((id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  // Memoized function for adding items
  const handleAddItem = useCallback(() => {
    if (inputValue.trim()) {
      setItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), text: inputValue },
      ]);
      setInputValue("");
    }
  }, [inputValue]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        color: "#000000",
      }}
    >
      <button
        onClick={() => setIsVisible(true)}
        style={{
          alignSelf: "center",
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "2px solid #333",
          backgroundColor: "#845ef7",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#7048e8";
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#845ef7";
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "none";
        }}
      >
        📚 Learn More About useCallback
      </button>

      {/* Main Content Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
          gap: "20px",
        }}
      >
        {/* Left Column - Examples */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Counter with Memoized Functions */}
          <div
            style={{
              border: "3px solid #333",
              borderRadius: "15px",
              padding: "30px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <h3 style={{ textAlign: "center", marginTop: "0" }}>
              Counter with Memoized Functions
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {count}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Button onClick={decrementWithCallback}>Decrement</Button>
                <Button onClick={incrementWithCallback}>Increment</Button>
                <Button onClick={resetCount}>Reset</Button>
              </div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#666",
                  margin: 0,
                  maxWidth: "500px",
                }}
              >
                Check console: Memoized buttons only re-render when their props
                change. The increment/decrement/reset callbacks are memoized
                with useCallback!
              </p>
            </div>
          </div>

          {/* List with Memoized Callbacks */}
          <div
            style={{
              border: "3px solid #333",
              borderRadius: "15px",
              padding: "30px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <h3 style={{ textAlign: "center", marginTop: "0" }}>
              List with Optimized Callbacks
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") handleAddItem();
                  }}
                  placeholder="Add new item..."
                  style={{
                    flex: 1,
                    padding: "10px 15px",
                    fontSize: "16px",
                    borderRadius: "8px",
                    border: "2px solid #333",
                    outline: "none",
                  }}
                />
                <button
                  onClick={handleAddItem}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "2px solid #333",
                    backgroundColor: "#51cf66",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Add
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {items.map((item) => (
                  <ListItem
                    key={item.id}
                    item={item}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </div>

              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#666",
                  margin: "10px 0 0 0",
                }}
              >
                The handleRemoveItem callback is memoized, so list items only
                re-render when necessary!
              </p>
            </div>
          </div>

          {/* Performance Comparison */}
          <div
            style={{
              border: "3px solid #333",
              borderRadius: "15px",
              padding: "30px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <h3 style={{ textAlign: "center", marginTop: "0" }}>
              Why useCallback Matters
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                border: "2px solid #333",
              }}
            >
              <div>
                <strong>✅ With useCallback:</strong>
                <ul style={{ marginTop: "5px", marginBottom: "0" }}>
                  <li>Function reference stays the same between renders</li>
                  <li>
                    Memoized child components don't re-render unnecessarily
                  </li>
                  <li>Better performance for expensive child components</li>
                </ul>
              </div>
              <div>
                <strong>❌ Without useCallback:</strong>
                <ul style={{ marginTop: "5px", marginBottom: "0" }}>
                  <li>New function created on every render</li>
                  <li>
                    Child components re-render even when logic hasn't changed
                  </li>
                  <li>Performance impact on large component trees</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Code Editor */}
        <div>
          <HookCodeEditor
            defaultCode={defaultCode}
            title="🎯 Practice useCallback"
          />
        </div>
      </div>

      <ModalComponent
        title="useCallback Hook in React"
        content="The useCallback hook returns a memoized callback function that only changes if one of its dependencies changes. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders. It's particularly important when working with React.memo() wrapped components or when functions are used as dependencies in other hooks."
        isOpen={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </div>
  );
}
