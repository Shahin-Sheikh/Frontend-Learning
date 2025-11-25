export default function OthersPage() {
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
      <h1 style={{ fontSize: "48px", margin: 0 }}>📦 Others</h1>
      <p style={{ fontSize: "20px", color: "#666", maxWidth: "600px" }}>
        Additional topics including TypeScript, CSS, HTML, and more web
        development resources.
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
          Coming Soon! Additional content will be added here.
        </p>
      </div>
    </div>
  );
}
