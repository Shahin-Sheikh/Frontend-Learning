export default function JavaScriptPage() {
  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        minHeight: "calc(100vh - 120px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1 style={{ fontSize: "48px", margin: 0 }}>🟨 JavaScript</h1>
      <p style={{ fontSize: "20px", color: "#666", maxWidth: "600px" }}>
        JavaScript fundamentals, ES6+ features, and modern JavaScript concepts.
      </p>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
          border: "2px solid #333",
        }}
      >
        <p style={{ margin: 0, color: "#888" }}>
          Coming Soon! JavaScript content will be added here.
        </p>
      </div>
    </div>
  );
}
