import { useState } from "react";

function ExampleCard({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "15px",
        border: "2px solid #333",
        borderRadius: "10px",
        backgroundColor: "white",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontWeight: "bold",
        fontSize: "14px",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "#845ef7";
        e.target.style.color = "white";
        e.target.style.transform = "translateY(-3px)";
        e.target.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "white";
        e.target.style.color = "black";
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "none";
      }}
    >
      {title}
    </button>
  );
}

export default function CodeEditor() {
  const [code, setCode] = useState(`// Welcome to React Code Playground! 🚀
// Try writing some JavaScript/React code here

function greet(name) {
  return \`Hello, \${name}! 👋\`;
}

const result = greet("Developer");
console.log(result);

// Example: Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);`);

  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const runCode = () => {
    setError("");
    setOutput("");

    // Capture console.log output
    const logs = [];
    const originalLog = console.log;
    console.log = (...args) => {
      logs.push(
        args
          .map((arg) =>
            typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)
          )
          .join(" ")
      );
      originalLog(...args);
    };

    try {
      // eslint-disable-next-line no-eval
      eval(code);
      setOutput(
        logs.length > 0 ? logs.join("\n") : "Code executed successfully! ✅"
      );
    } catch (err) {
      setError(err.toString());
    } finally {
      console.log = originalLog;
    }
  };

  const clearCode = () => {
    setCode("");
    setOutput("");
    setError("");
  };

  const resetCode = () => {
    setCode(`// Welcome to React Code Playground! 🚀
// Try writing some JavaScript/React code here

function greet(name) {
  return \`Hello, \${name}! 👋\`;
}

const result = greet("Developer");
console.log(result);

// Example: Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);`);
    setOutput("");
    setError("");
  };

  const loadExample = (exampleCode) => {
    setCode(exampleCode);
    setOutput("");
    setError("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "30px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        <h1 style={{ margin: "0 0 10px 0", color: "#333" }}>
          💻 React Code Playground
        </h1>
        <p style={{ margin: 0, color: "#666", fontSize: "16px" }}>
          Practice JavaScript and React concepts in real-time
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          minHeight: "500px",
        }}
      >
        {/* Code Editor */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              backgroundColor: "#2d2d2d",
              borderRadius: "8px 8px 0 0",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              📝 Editor
            </span>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={clearCode}
                style={{
                  padding: "6px 12px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#ff6b6b",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Clear
              </button>
              <button
                onClick={resetCode}
                style={{
                  padding: "6px 12px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#868e96",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Reset
              </button>
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
            style={{
              flex: 1,
              padding: "15px",
              fontSize: "14px",
              fontFamily: "'Courier New', monospace",
              border: "2px solid #333",
              borderRadius: "0 0 8px 8px",
              outline: "none",
              resize: "none",
              backgroundColor: "#1e1e1e",
              color: "#d4d4d4",
              lineHeight: "1.6",
            }}
          />
          <button
            onClick={runCode}
            style={{
              padding: "15px",
              fontSize: "16px",
              fontWeight: "bold",
              border: "2px solid #333",
              borderRadius: "8px",
              backgroundColor: "#51cf66",
              color: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#40c057";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#51cf66";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            ▶️ Run Code
          </button>
        </div>

        {/* Output Console */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            style={{
              padding: "10px 15px",
              backgroundColor: "#2d2d2d",
              borderRadius: "8px 8px 0 0",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              🖥️ Console Output
            </span>
          </div>
          <div
            style={{
              flex: 1,
              padding: "15px",
              fontSize: "14px",
              fontFamily: "'Courier New', monospace",
              border: "2px solid #333",
              borderRadius: "0 0 8px 8px",
              backgroundColor: "#1e1e1e",
              color: "#d4d4d4",
              overflowY: "auto",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {error ? (
              <div style={{ color: "#ff6b6b" }}>
                <strong>❌ Error:</strong>
                <br />
                {error}
              </div>
            ) : output ? (
              <div style={{ color: "#51cf66" }}>{output}</div>
            ) : (
              <div style={{ color: "#868e96", fontStyle: "italic" }}>
                Output will appear here after running the code...
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div
        style={{
          border: "3px solid #333",
          borderRadius: "15px",
          padding: "25px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h3 style={{ marginTop: 0, textAlign: "center" }}>
          💡 Quick Examples to Try
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
          }}
        >
          <ExampleCard
            title="Array Methods"
            onClick={() =>
              loadExample(`// Array Methods Example
const fruits = ['apple', 'banana', 'orange'];

// Map
const upperFruits = fruits.map(f => f.toUpperCase());
console.log("Mapped:", upperFruits);

// Filter
const longFruits = fruits.filter(f => f.length > 5);
console.log("Filtered:", longFruits);

// Reduce
const totalLength = fruits.reduce((sum, f) => sum + f.length, 0);
console.log("Total Length:", totalLength);`)
            }
          />
          <ExampleCard
            title="ES6 Features"
            onClick={() =>
              loadExample(`// ES6 Features
// Destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(\`\${name} is \${age} years old\`);

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Spread:", arr2);

// Arrow Functions
const multiply = (a, b) => a * b;
console.log("5 * 3 =", multiply(5, 3));`)
            }
          />
          <ExampleCard
            title="Promises & Async"
            onClick={() =>
              loadExample(`// Promises Example
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded! 📦");
    }, 1000);
  });
};

fetchData().then(data => {
  console.log(data);
  console.log("Promise resolved successfully!");
});

console.log("Loading data...");`)
            }
          />
          <ExampleCard
            title="Object Methods"
            onClick={() =>
              loadExample(`// Object Methods
const user = {
  name: 'Alice',
  age: 25,
  city: 'NYC'
};

// Keys
console.log("Keys:", Object.keys(user));

// Values
console.log("Values:", Object.values(user));

// Entries
console.log("Entries:", Object.entries(user));`)
            }
          />
        </div>
      </div>
    </div>
  );
}
