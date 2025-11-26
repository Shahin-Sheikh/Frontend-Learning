export default function CodeSnippet({ code, filename }) {
  return (
    <div
      style={{
        border: "3px solid #333",
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "#1e1e1e",
        fontFamily: "'Consolas', 'Courier New', monospace",
        maxHeight: "600px",
      }}
    >
      {/* Window Header */}
      <div
        style={{
          backgroundColor: "#2d2d30",
          padding: "12px 20px",
          borderBottom: "1px solid #3e3e42",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#ff5f56",
            }}
          />
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#ffbd2e",
            }}
          />
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#27c93f",
            }}
          />
        </div>
        <span
          style={{
            color: "#cccccc",
            fontSize: "14px",
            marginLeft: "10px",
          }}
        >
          {filename}
        </span>
      </div>

      {/* Code Content */}
      <div
        style={{
          overflowY: "auto",
          maxHeight: "550px",
        }}
      >
        <pre
          style={{
            margin: 0,
            padding: "20px",
            color: "#d4d4d4",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
        >
          <code dangerouslySetInnerHTML={{ __html: code }} />
        </pre>
      </div>
    </div>
  );
}
