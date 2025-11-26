import { useReducer, useState } from "react";
import ModalComponent from "../../components/modal.component";
import CodeSnippet from "../../components/code-snippet.component";
import { useReducerCode } from "../../data/hook-code-snippets";

// Reducer function for counter
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.payload };
    default:
      return state;
  }
};

// Reducer function for todo list
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "CLEAR_ALL":
      return { ...state, todos: [] };
    default:
      return state;
  }
};

export default function UseReducerHook() {
  const [isVisible, setIsVisible] = useState(false);
  const [counterState, counterDispatch] = useReducer(counterReducer, {
    count: 0,
  });
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: [
      { id: 1, text: "Learn useReducer", completed: false },
      { id: 2, text: "Build awesome apps", completed: false },
    ],
  });
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      todoDispatch({ type: "ADD_TODO", payload: inputValue });
      setInputValue("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        color: "#000000",
      }}
    >
      <button
        onClick={() => setIsVisible(true)}
        style={{
          alignSelf: "center",
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "2px solid #333",
          backgroundColor: "#845ef7",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#7048e8";
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#845ef7";
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "none";
        }}
      >
        📚 Learn More About useReducer
      </button>

      {/* Main Content Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
          gap: "20px",
        }}
      >
        {/* Left Column - Examples */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
              Counter with Reducer
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
                onClick={() => counterDispatch({ type: "DECREMENT" })}
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
                  transition: "all 0.3s ease",
                }}
              >
                -
              </button>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  minWidth: "100px",
                  textAlign: "center",
                  color: "#333",
                }}
              >
                {counterState.count}
              </div>
              <button
                onClick={() => counterDispatch({ type: "INCREMENT" })}
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
                  transition: "all 0.3s ease",
                }}
              >
                +
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <button
                onClick={() => counterDispatch({ type: "RESET" })}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "2px solid #333",
                  backgroundColor: "#fab005",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Reset
              </button>
              <button
                onClick={() => counterDispatch({ type: "SET", payload: 10 })}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "2px solid #333",
                  backgroundColor: "#845ef7",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Set to 10
              </button>
            </div>
          </div>

          {/* Todo List Example */}
          <div
            style={{
              border: "3px solid #333",
              borderRadius: "15px",
              padding: "30px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <h3 style={{ textAlign: "center", marginTop: "0" }}>
              Todo List with Reducer
            </h3>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleAddTodo();
                }}
                placeholder="Add a new todo..."
                style={{
                  flex: 1,
                  padding: "10px 15px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "2px solid #333",
                  outline: "none",
                }}
              />
              <button
                onClick={handleAddTodo}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "2px solid #333",
                  backgroundColor: "#51cf66",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Add
              </button>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {todoState.todos.length === 0 ? (
                <p
                  style={{
                    textAlign: "center",
                    color: "#666",
                    margin: "20px 0",
                  }}
                >
                  No todos yet. Add one above!
                </p>
              ) : (
                todoState.todos.map((todo) => (
                  <div
                    key={todo.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      border: "2px solid #333",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() =>
                        todoDispatch({ type: "TOGGLE_TODO", payload: todo.id })
                      }
                      style={{
                        cursor: "pointer",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    <span
                      style={{
                        flex: 1,
                        fontSize: "16px",
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                        color: todo.completed ? "#999" : "#333",
                      }}
                    >
                      {todo.text}
                    </span>
                    <button
                      onClick={() =>
                        todoDispatch({ type: "DELETE_TODO", payload: todo.id })
                      }
                      style={{
                        padding: "6px 12px",
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
                  </div>
                ))
              )}
            </div>

            {todoState.todos.length > 0 && (
              <button
                onClick={() => todoDispatch({ type: "CLEAR_ALL" })}
                style={{
                  width: "100%",
                  marginTop: "15px",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "2px solid #333",
                  backgroundColor: "#868e96",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Clear All Todos
              </button>
            )}
          </div>
        </div>

        {/* Right Column - Code Snippet */}
        <div>
          <CodeSnippet
            code={useReducerCode}
            filename="useReducer-example.jsx"
          />
        </div>
      </div>

      <ModalComponent
        title="useReducer Hook in React"
        content="The useReducer hook is an alternative to useState for managing complex state logic. It accepts a reducer function and an initial state, returning the current state and a dispatch function. This is particularly useful when state updates depend on previous state or when you have complex state transitions. It's similar to Redux but built into React!"
        isOpen={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </div>
  );
}
