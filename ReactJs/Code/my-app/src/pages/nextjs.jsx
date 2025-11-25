export default function NextJsPage() {
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
      <h1 style={{ fontSize: "48px", margin: 0 }}>▲ Next.js</h1>
      <p style={{ fontSize: "20px", color: "#666", maxWidth: "600px" }}>
        Server-side rendering, static site generation, and Next.js best
        practices.
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
          Coming Soon! Next.js content will be added here.
        </p>
      </div>
    </div>
  );
}
