import { useState } from "react";

export default function UseStateHook() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState({
    name: "",
    age: "",
  });
  const [listValues, setListValues] = useState([
    {
      name: "John Doe",
      age: "25",
    },
    {
      name: "Jane Smith",
      age: "30",
    },
  ]);

  const handleDataEntry = () => {
    if (inputValue.name.trim() && inputValue.age.trim()) {
      setListValues([...listValues, inputValue]);
      setInputValue({ name: "", age: "" });
    }
  };

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "20px",
        color: "#000000",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "0" }}>
        useState Hook Examples
      </h2>

      {/* Counter Example */}
      <div
        style={{
          border: "3px solid #333",
          borderRadius: "15px",
          padding: "30px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <h3 style={{ textAlign: "center", marginTop: "0" }}>
          Interactive Counter
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <button
            onClick={decrement}
            style={{
              width: "50px",
              height: "50px",
              fontSize: "24px",
              borderRadius: "50%",
              border: "2px solid #333",
              backgroundColor: "#ff6b6b",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            -
          </button>
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: "#FFCCCB",
              border: "8px solid #333",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {counter}
          </div>
          <button
            onClick={increment}
            style={{
              width: "50px",
              height: "50px",
              fontSize: "24px",
              borderRadius: "50%",
              border: "2px solid #333",
              backgroundColor: "#51cf66",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            +
          </button>
        </div>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <button
            onClick={reset}
            style={{
              padding: "10px 30px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "2px solid #333",
              backgroundColor: "#4dabf7",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* List Management Example */}
      <div
        style={{
          border: "3px solid #333",
          borderRadius: "15px",
          padding: "30px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <h3 style={{ textAlign: "center", marginTop: "0" }}>
          User List Manager
        </h3>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter name..."
            value={inputValue.name}
            onChange={(e) => {
              setInputValue({ ...inputValue, name: e.target.value });
            }}
            style={{
              flex: 1,
              padding: "10px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "2px solid #333",
            }}
          />
          <input
            type="number"
            placeholder="Enter age..."
            value={inputValue.age}
            onChange={(e) => {
              setInputValue({ ...inputValue, age: e.target.value });
            }}
            style={{
              flex: 1,
              padding: "10px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "2px solid #333",
            }}
          />
          <button
            onClick={handleDataEntry}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "2px solid #333",
              backgroundColor: "#51cf66",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Add User
          </button>
        </div>

        <table
          style={{
            border: "2px solid #333",
            borderRadius: "8px",
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#333", color: "white" }}>
              <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Age</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {listValues?.map((data, index) => {
              return (
                <tr
                  key={index}
                  style={{
                    backgroundColor: `${
                      index % 2 === 0 ? "#DCFCE7" : "#FFFFFF"
                    }`,
                  }}
                >
                  <td style={{ padding: "12px", border: "none" }}>
                    {data.name}
                  </td>
                  <td style={{ padding: "12px", border: "none" }}>
                    {data.age}
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      border: "none",
                      textAlign: "center",
                    }}
                  >
                    <button
                      onClick={() => {
                        const updatedList = listValues.filter(
                          (_, i) => i !== index
                        );
                        setListValues(updatedList);
                      }}
                      style={{
                        padding: "6px 16px",
                        fontSize: "14px",
                        borderRadius: "6px",
                        border: "2px solid #333",
                        backgroundColor: "#ff6b6b",
                        color: "white",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          style={{
            marginTop: "15px",
            textAlign: "center",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Total Users: {listValues.length}
        </div>
      </div>
    </div>
  );
}
