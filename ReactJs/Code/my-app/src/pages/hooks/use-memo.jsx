import { useMemo, useState } from "react";
import ModalComponent from "../../components/modal.component";
import CodeSnippet from "../../components/code-snippet.component";
import { useMemoCode } from "../../data/hook-code-snippets";

export default function UseMemoHook() {
  const [isVisible, setIsVisible] = useState(false);
  const [number, setNumber] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [filter, setFilter] = useState("");

  // Expensive calculation - simulating a slow operation
  const expensiveCalculation = (num) => {
    console.log("🔄 Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      // Simulating expensive computation
    }
    return num * 2;
  };

  // With useMemo - only recalculates when 'number' changes
  const doubledNumber = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  // Filtering with useMemo
  const filteredItems = useMemo(() => {
    console.log("🔍 Filtering items...");
    return items.filter((item) => item.toString().includes(filter));
  }, [items, filter]);

  const themeStyles = useMemo(() => {
    console.log("🎨 Applying theme...");
    return {
      backgroundColor: darkMode ? "#2d2d2d" : "#ffffff",
      color: darkMode ? "#ffffff" : "#000000",
    };
  }, [darkMode]);

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

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
        📚 Learn More About useMemo
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
          {/* Expensive Calculation Example */}
          <div
            style={{
              border: "3px solid #333",
              borderRadius: "15px",
              padding: "30px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <h3 style={{ textAlign: "center", marginTop: "0" }}>
              Expensive Calculation Memoization
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "2px solid #333",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Input: {number} → Doubled: {doubledNumber}
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => setNumber(number - 1)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "2px solid #333",
                    backgroundColor: "#ff6b6b",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Decrease
                </button>
                <button
                  onClick={() => setNumber(number + 1)}
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
                  Increase
                </button>
              </div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#666",
                  margin: 0,
                }}
              >
                Check console - calculation only runs when number changes!
              </p>
            </div>
          </div>

          {/* Theme Toggle Example */}
          <div
            style={{
              border: "3px solid #333",
              borderRadius: "15px",
              padding: "30px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <h3 style={{ textAlign: "center", marginTop: "0" }}>
              Theme Memoization
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  ...themeStyles,
                  padding: "20px",
                  borderRadius: "10px",
                  border: "2px solid #333",
                  width: "100%",
                  maxWidth: "400px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                Current Theme: {darkMode ? "Dark" : "Light"}
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "2px solid #333",
                  backgroundColor: "#845ef7",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Toggle Theme
              </button>
            </div>
          </div>

          {/* Filtered List Example */}
          <div
            style={{
              border: "3px solid #333",
              borderRadius: "15px",
              padding: "30px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <h3 style={{ textAlign: "center", marginTop: "0" }}>
              List Filtering with Memoization
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filter items..."
                style={{
                  padding: "10px 15px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "2px solid #333",
                  outline: "none",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  justifyContent: "center",
                  minHeight: "60px",
                }}
              >
                {filteredItems.map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "15px 20px",
                      backgroundColor: "white",
                      border: "2px solid #333",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <button
                onClick={addItem}
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
                Add Item
              </button>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#666",
                  margin: 0,
                }}
              >
                Filter only recalculates when items or filter text changes!
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Code Snippet */}
        <div>
          <CodeSnippet code={useMemoCode} filename="useMemo-example.jsx" />
        </div>
      </div>

      <ModalComponent
        title="useMemo Hook in React"
        content="The useMemo hook caches the result of an expensive calculation between re-renders. It only recalculates the memoized value when one of its dependencies changes. This optimization helps avoid expensive calculations on every render, improving performance. Use it for computationally expensive operations or when creating objects/arrays that are passed as props to prevent unnecessary child re-renders."
        isOpen={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </div>
  );
}
