export default function Main() {
  const hooks = [
    "Use State",
    "Use Effect",
    "Use Ref",
    "Use Context",
    "Use Reducer",
    "Custom Hook",
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        padding: "20px",
      }}
    >
      {hooks?.map((item) => {
        return (
          <div
            style={{
              border: "1px solid #A9A9A9",
              padding: "10px",
              textAlign: "center",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            {item === "Use State" ? (
              <div
                href="/usestate"
                style={{ textDecoration: "none", color: "black" }}
              >
                {item}
              </div>
            ) : item === "Use Effect" ? (
              <a
                href="/useeffect"
                style={{ textDecoration: "none", color: "black" }}
              >
                {item}
              </a>
            ) : item === "Use Ref" ? (
              <a
                href="/useref"
                style={{ textDecoration: "none", color: "black" }}
              >
                {item}
              </a>
            ) : item === "Use Context" ? (
              <a
                href="/usecontext"
                style={{ textDecoration: "none", color: "black" }}
              >
                {item}
              </a>
            ) : item === "Use Reducer" ? (
              <a
                href="/usereducer"
                style={{ textDecoration: "none", color: "black" }}
              >
                {item}
              </a>
            ) : item === "Custom Hook" ? (
              <a
                href="/customhook"
                style={{ textDecoration: "none", color: "black" }}
              >
                {item}
              </a>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
