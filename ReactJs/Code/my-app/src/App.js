import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/navigation.component";
import JavaScriptPage from "./pages/javascript";
import ReactJsPage from "./pages/reactjs";
import NextJsPage from "./pages/nextjs";
import OthersPage from "./pages/others";
import CodeEditor from "./components/code-editor.component";
import UseStateHook from "./pages/hooks/use-state";
import UseEffectHook from "./pages/hooks/use-effect";
import UseRefHook from "./pages/hooks/use-ref";
import UseContextHook from "./pages/hooks/use-context";
import UseReducerHook from "./pages/hooks/use-reducer";
import UseMemoHook from "./pages/hooks/use-memo";
import UseCallbackHook from "./pages/hooks/use-callback";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          {/* Default route redirects to Code Playground */}
          <Route path="/" element={<Navigate to="/playground" replace />} />

          {/* Code Playground */}
          <Route path="/playground" element={<CodeEditor />} />

          {/* JavaScript Section */}
          <Route path="/javascript" element={<JavaScriptPage />} />

          {/* ReactJs Section with nested routes */}
          <Route path="/reactjs" element={<ReactJsPage />}>
            <Route path="use-state" element={<UseStateHook />} />
            <Route path="use-effect" element={<UseEffectHook />} />
            <Route path="use-ref" element={<UseRefHook />} />
            <Route path="use-context" element={<UseContextHook />} />
            <Route path="use-reducer" element={<UseReducerHook />} />
            <Route path="use-memo" element={<UseMemoHook />} />
            <Route path="use-callback" element={<UseCallbackHook />} />
            <Route
              index
              element={<Navigate to="/reactjs/use-state" replace />}
            />
          </Route>

          {/* NextJs Section */}
          <Route path="/nextjs" element={<NextJsPage />} />

          {/* Others Section */}
          <Route path="/others" element={<OthersPage />} />

          {/* Catch all - redirect to Code Playground */}
          <Route path="*" element={<Navigate to="/playground" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
