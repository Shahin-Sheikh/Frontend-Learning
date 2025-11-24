import { createContext, useState, useContext } from "react";

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

export default function UseContextHook() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <div>Use Context Hook</div>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
    </div>
  );
}
