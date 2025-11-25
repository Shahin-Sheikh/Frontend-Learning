import { ThemeProvider } from "./hooks/use-context";
import { Outlet } from "react-router-dom";

export default function ReactJsPage() {
  return (
    <ThemeProvider>
      <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
