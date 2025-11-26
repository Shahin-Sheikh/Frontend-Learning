import { useRef, useState, useEffect } from "react";
import ModalComponent from "../../components/modal.component";
import CodeSnippet from "../../components/code-snippet.component";
import { useRefCode } from "../../data/hook-code-snippets";

export default function UseRefHook() {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [renderCount, setRenderCount] = useState(0);
  const inputRef = useRef(null);
  const renderCountRef = useRef(0);
  const previousValueRef = useRef("");

  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
    previousValueRef.current = inputValue;
  });

  const focusInput = () => {
    inputRef.current.focus();
  };

  const clearInput = () => {
    setInputValue("");
    inputRef.current.focus();
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
        📚 Learn More About useRef
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
          {/* DOM Reference Example */}
          <div
            style={{
              border: "3px solid #333",
              borderRadius: "15px",
              padding: "30px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <h3 style={{ textAlign: "center", marginTop: "0" }}>
              DOM Element Reference
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  padding: "12px 15px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "2px solid #333",
                  outline: "none",
                }}
              />
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={focusInput}
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
                  Focus Input
                </button>
                <button
                  onClick={clearInput}
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
                  Clear & Focus
                </button>
              </div>
            </div>
          </div>

          {/* Mutable Value Example */}
          <div
            style={{
              border: "3px solid #333",
              borderRadius: "15px",
              padding: "30px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <h3 style={{ textAlign: "center", marginTop: "0" }}>
              Persistent Values Without Re-render
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
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "2px solid #333",
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  <strong>Current Value:</strong> {inputValue || "(empty)"}
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <strong>Previous Value:</strong>{" "}
                  {previousValueRef.current || "(empty)"}
                </div>
                <div>
                  <strong>Component Renders:</strong> {renderCountRef.current}
                </div>
              </div>
              <button
                onClick={() => setRenderCount(renderCount + 1)}
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
                Force Re-render
              </button>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#666",
                  margin: 0,
                }}
              >
                Notice: Render count increases but doesn't trigger on its own!
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Code Snippet */}
        <div>
          <CodeSnippet code={useRefCode} filename="useRef-example.jsx" />
        </div>
      </div>

      <ModalComponent
        title="useRef Hook in React"
        content="The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument. It has two main uses: (1) Accessing DOM elements directly, and (2) Storing mutable values that persist between renders without causing re-renders. Unlike state, updating a ref doesn't trigger a component re-render!"
        isOpen={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </div>
  );
}
