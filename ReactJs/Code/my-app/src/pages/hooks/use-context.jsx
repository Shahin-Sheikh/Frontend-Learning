import { createContext, useState, useContext } from "react";
import ModalComponent from "../../components/modal.component";
import HookCodeEditor from "../../components/hook-code-editor.component";

const defaultCode = `// useContext Hook Example
// Share data across components without props

// Simulating context usage
const appConfig = {
  theme: "dark",
  user: { name: "John", role: "admin" },
  settings: { notifications: true }
};

function getTheme() {
  return appConfig.theme;
}

function getUser() {
  return appConfig.user;
}

console.log("Current theme:", getTheme());
console.log("Current user:", getUser());
console.log("User role:", appConfig.user.role);`;

export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: theme === "light" ? "#ffffff" : "#2d2d2d",
        color: theme === "light" ? "#000000" : "#ffffff",
        border: `3px solid ${theme === "light" ? "#333" : "#666"}`,
        transition: "all 0.3s ease",
      }}
    >
      <h3 style={{ marginTop: 0 }}>Themed Card Component</h3>
      <p>
        This card is styled based on the current theme context. It automatically
        updates when the theme changes!
      </p>
    </div>
  );
}

function ThemedButton() {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "8px",
        border: `2px solid ${theme === "light" ? "#333" : "#666"}`,
        backgroundColor: theme === "light" ? "#845ef7" : "#5f3dc4",
        color: "white",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "all 0.3s ease",
      }}
    >
      Themed Button
    </button>
  );
}

export default function UseContextHook() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
        📚 Learn More About useContext
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
          {/* Theme Toggle Section */}
          <div
            style={{
              border: "3px solid #333",
              borderRadius: "15px",
              padding: "30px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <h3 style={{ textAlign: "center", marginTop: "0" }}>
              Theme Context Demo
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <p style={{ textAlign: "center", margin: "10px 0" }}>
                Current Theme: <strong>{theme.toUpperCase()}</strong>
              </p>
              <button
                onClick={toggleTheme}
                style={{
                  padding: "12px 30px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "2px solid #333",
                  backgroundColor: theme === "light" ? "#333" : "#fff",
                  color: theme === "light" ? "#fff" : "#333",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                }}
              >
                {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
              </button>
            </div>
          </div>

          {/* Themed Components Section */}
          <div
            style={{
              border: "3px solid #333",
              borderRadius: "15px",
              padding: "30px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <h3 style={{ textAlign: "center", marginTop: "0" }}>
              Components Using Theme Context
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <ThemedCard />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <ThemedButton />
                <ThemedButton />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Code Editor */}
        <div>
          <HookCodeEditor
            defaultCode={defaultCode}
            title="🎯 Practice useContext"
          />
        </div>
      </div>

      <ModalComponent
        title="useContext Hook in React"
        content="The useContext hook lets you subscribe to React context without introducing nesting. It allows you to share values like themes or user information between components without passing props down manually at every level. In this example, multiple components access and respond to the same theme context without prop drilling!"
        isOpen={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </div>
  );
}
