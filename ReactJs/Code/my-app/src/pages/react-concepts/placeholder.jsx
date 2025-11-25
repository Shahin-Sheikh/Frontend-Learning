export default function ReactTopicPlaceholder({ topic }) {
  return (
    <div
      style={{
        padding: "60px 40px",
        textAlign: "center",
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          margin: 0,
          fontWeight: "600",
          color: "#2d2d2d",
        }}
      >
        ⚛️ {topic}
      </h1>
      <p
        style={{
          fontSize: "18px",
          color: "#666",
          maxWidth: "600px",
          lineHeight: "1.7",
        }}
      >
        This React content is being prepared. Check back soon for comprehensive
        examples and interactive code editor!
      </p>
      <div
        style={{
          padding: "25px 35px",
          backgroundColor: "white",
          borderRadius: "12px",
          border: "2px solid #845ef7",
          boxShadow: "0 4px 12px rgba(132, 94, 247, 0.1)",
        }}
      >
        <p style={{ margin: 0, color: "#845ef7", fontWeight: "500" }}>
          Content coming soon!
        </p>
      </div>
    </div>
  );
}
