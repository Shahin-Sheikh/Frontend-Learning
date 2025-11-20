import { useState } from "react";

export default function UseStateHook() {
  const [inputValue, setInputValue] = useState({
    name: "FirstName",
    age: "25",
  });
  const [listValues, setListValues] = useState([
    {
      name: "FirstName",
      age: "25",
    },
  ]);

  const handleDataEntry = () => {
    setListValues([...listValues, inputValue]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        color: "#000000",
      }}
    >
      <div>Use State</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter name..."
          onChange={(e) => {
            setInputValue({ ...inputValue, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Enter age..."
          onChange={(e) => {
            setInputValue({ ...inputValue, age: e.target.value });
          }}
        />
        <button
          onClick={() => {
            handleDataEntry();
            setInputValue({ name: "", age: "" });
          }}
        >
          Add
        </button>
      </div>

      <table
        style={{
          border: "1px solid #A9A9A9",
          borderRadius: "5px",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listValues?.map((data, index) => {
            return (
              <tr
                key={index}
                style={{
                  backgroundColor: `${index % 2 === 0 ? "#DCFCE7" : "#FFFFFF"}`,
                }}
              >
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>
                  <button
                    onClick={() => {
                      const updatedList = listValues.filter(
                        (_, i) => i !== index
                      );
                      setListValues(updatedList);
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
    </div>
  );
}
