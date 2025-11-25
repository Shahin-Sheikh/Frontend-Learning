import { useContext, useState } from "react";
import UseContextHook, {
  ThemeContext,
  ThemeProvider,
} from "./hooks/use-context";
import UseEffectHook from "./hooks/use-effect";
import UseStateHook from "./hooks/use-state";
import UseRefHook from "./hooks/use-ref";
import UseReducerHook from "./hooks/use-reducer";
import UseMemoHook from "./hooks/use-memo";
import UseCallbackHook from "./hooks/use-callback";
import CodeEditor from "../components/code-editor.component";

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}

function HomeContent() {
  const { theme } = useContext(ThemeContext);
  const [currentView, setCurrentView] = useState("playground");

  const hooks = [
    { id: "useState", name: "useState", component: <UseStateHook /> },
    { id: "useEffect", name: "useEffect", component: <UseEffectHook /> },
    { id: "useRef", name: "useRef", component: <UseRefHook /> },
    { id: "useContext", name: "useContext", component: <UseContextHook /> },
    { id: "useReducer", name: "useReducer", component: <UseReducerHook /> },
    { id: "useMemo", name: "useMemo", component: <UseMemoHook /> },
    { id: "useCallback", name: "useCallback", component: <UseCallbackHook /> },
  ];

  const renderContent = () => {
    if (currentView === "playground") {
      return <CodeEditor />;
    }

    const selectedHook = hooks.find((h) => h.id === currentView);
    return selectedHook ? (
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {selectedHook.component}
      </div>
    ) : null;
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#FFFFFF" : "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor: "#2d2d2d",
          padding: "15px 30px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setCurrentView("playground")}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "2px solid",
              borderColor:
                currentView === "playground" ? "#845ef7" : "transparent",
              backgroundColor:
                currentView === "playground" ? "#845ef7" : "transparent",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "14px",
              transition: "all 0.3s ease",
            }}
          >
            💻 Code Playground
          </button>
          {hooks.map((hook) => (
            <button
              key={hook.id}
              onClick={() => setCurrentView(hook.id)}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "2px solid",
                borderColor:
                  currentView === hook.id ? "#845ef7" : "transparent",
                backgroundColor:
                  currentView === hook.id ? "#845ef7" : "transparent",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
                transition: "all 0.3s ease",
              }}
            >
              {hook.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <div style={{ padding: "20px" }}>{renderContent()}</div>
    </div>
  );
}
