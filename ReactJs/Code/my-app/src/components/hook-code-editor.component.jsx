import { useState } from "react";

export default function HookCodeEditor({ defaultCode, title }) {
  const [code, setCode] = useState(defaultCode);
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

  const resetCode = () => {
    setCode(defaultCode);
    setOutput("");
    setError("");
  };

  return (
    <div
      style={{
        border: "3px solid #333",
        borderRadius: "15px",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        position: "sticky",
        top: "20px",
        alignSelf: "flex-start",
      }}
    >
      <h3 style={{ textAlign: "center", marginTop: "0" }}>
        {title || "Practice Code"}
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          height: "calc(100vh - 160px)",
          maxHeight: "800px",
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
              padding: "8px 12px",
              backgroundColor: "#2d2d2d",
              borderRadius: "6px 6px 0 0",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              📝 Code
            </span>
            <button
              onClick={resetCode}
              style={{
                padding: "4px 10px",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "#868e96",
                color: "white",
                cursor: "pointer",
                fontSize: "11px",
                fontWeight: "bold",
              }}
            >
              Reset
            </button>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
            style={{
              height: "400px",
              padding: "12px",
              fontSize: "13px",
              fontFamily: "'Courier New', monospace",
              border: "2px solid #333",
              borderRadius: "0 0 6px 6px",
              outline: "none",
              resize: "vertical",
              backgroundColor: "#1e1e1e",
              color: "#d4d4d4",
              lineHeight: "1.5",
              minHeight: "300px",
            }}
          />
          <button
            onClick={runCode}
            style={{
              padding: "12px",
              fontSize: "14px",
              fontWeight: "bold",
              border: "2px solid #333",
              borderRadius: "6px",
              backgroundColor: "#51cf66",
              color: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#40c057";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#51cf66";
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
              padding: "8px 12px",
              backgroundColor: "#2d2d2d",
              borderRadius: "6px 6px 0 0",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              🖥️ Output
            </span>
          </div>
          <div
            style={{
              minHeight: "150px",
              maxHeight: "250px",
              padding: "12px",
              fontSize: "13px",
              fontFamily: "'Courier New', monospace",
              border: "2px solid #333",
              borderRadius: "0 0 6px 6px",
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
                Run code to see output...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
