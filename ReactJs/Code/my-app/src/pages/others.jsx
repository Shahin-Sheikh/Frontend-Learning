import { useState } from "react";

export default function OthersPage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{
          padding: "10px",
        }}
      >
        <h4>Use State Example</h4>
        <h1>Count: {count}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <br />
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <br />
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </>
  );
}
