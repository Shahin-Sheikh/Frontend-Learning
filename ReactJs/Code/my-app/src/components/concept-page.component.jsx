import CodeSnippet from "./code-snippet.component";

export default function ConceptPage({
  title,
  description,
  sections,
  codeSnippet,
  filename,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 3fr",
        gap: "20px",
        padding: "30px",
        backgroundColor: "#f5f5f5",
        minHeight: "calc(100vh - 80px)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Left Side - Content */}
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          overflowY: "auto",
          maxHeight: "calc(100vh - 140px)",
        }}
      >
        <h1
          style={{
            color: "#2d2d2d",
            marginBottom: "10px",
            fontSize: "32px",
            fontWeight: "600",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: "#666",
            fontSize: "16px",
            lineHeight: "1.7",
            marginBottom: "30px",
          }}
        >
          {description}
        </p>

        {sections.map((section, index) => (
          <div key={index} style={{ marginBottom: "35px" }}>
            <h2
              style={{
                color: "#845ef7",
                fontSize: "22px",
                marginBottom: "12px",
                fontWeight: "600",
              }}
            >
              {section.title}
            </h2>
            <p
              style={{
                color: "#444",
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "15px",
              }}
            >
              {section.content}
            </p>
            {section.code && (
              <pre
                style={{
                  backgroundColor: "#2d2d2d",
                  color: "#e8e8e8",
                  padding: "20px",
                  borderRadius: "8px",
                  overflow: "auto",
                  fontSize: "14px",
                  fontFamily: "'JetBrains Mono', monospace",
                  lineHeight: "1.6",
                  border: "1px solid #444",
                }}
              >
                <code>{section.code}</code>
              </pre>
            )}
            {section.points && (
              <ul
                style={{
                  color: "#444",
                  fontSize: "15px",
                  lineHeight: "1.8",
                  paddingLeft: "24px",
                }}
              >
                {section.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: "8px" }}>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Right Side - Code Snippet */}
      <div>
        <CodeSnippet code={codeSnippet} filename={filename} />
      </div>
    </div>
  );
}
