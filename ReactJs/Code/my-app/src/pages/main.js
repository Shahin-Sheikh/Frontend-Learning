import UseEffectHook from "./hooks/use-effect";
import UseStateHook from "./hooks/use-state";

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
              <UseStateHook />
            ) : item === "Use Effect" ? (
              <UseEffectHook />
            ) : item === "Use Ref" ? (
              <div>{item}</div>
            ) : item === "Use Context" ? (
              <div>{item}</div>
            ) : item === "Use Reducer" ? (
              <div>{item}</div>
            ) : item === "Custom Hook" ? (
              <div>{item}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
