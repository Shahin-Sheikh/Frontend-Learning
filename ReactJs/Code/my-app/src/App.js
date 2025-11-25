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

// JavaScript concept pages
import ExecutionContextPage from "./pages/javascript/execution-context";
import HoistingPage from "./pages/javascript/hoisting";
import ClosurePage from "./pages/javascript/closure";
import EventLoopPage from "./pages/javascript/event-loop";
import PromisesPage from "./pages/javascript/promises";
import AsyncAwaitPage from "./pages/javascript/async-await";
import HigherOrderFunctionPage from "./pages/javascript/higher-order-function";
import JavaScriptTopicPlaceholder from "./pages/javascript/placeholder";

// React concept pages
import JSXPage from "./pages/react-concepts/jsx";
import ComponentsPage from "./pages/react-concepts/components";
import PropsPage from "./pages/react-concepts/props";
import ReactTopicPlaceholder from "./pages/react-concepts/placeholder";

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

          {/* JavaScript Section with all concept routes */}
          <Route path="/javascript" element={<JavaScriptPage />} />
          <Route
            path="/javascript/syntax-parser"
            element={<JavaScriptTopicPlaceholder topic="Syntax Parser" />}
          />
          <Route
            path="/javascript/lexical-environment"
            element={<JavaScriptTopicPlaceholder topic="Lexical Environment" />}
          />
          <Route
            path="/javascript/execution-context"
            element={<ExecutionContextPage />}
          />
          <Route path="/javascript/hoisting" element={<HoistingPage />} />
          <Route
            path="/javascript/scope-chain"
            element={<JavaScriptTopicPlaceholder topic="Scope Chain" />}
          />
          <Route
            path="/javascript/first-class-function"
            element={
              <JavaScriptTopicPlaceholder topic="First Class Function" />
            }
          />
          <Route
            path="/javascript/first-order-function"
            element={
              <JavaScriptTopicPlaceholder topic="First Order Function" />
            }
          />
          <Route
            path="/javascript/higher-order-function"
            element={<HigherOrderFunctionPage />}
          />
          <Route
            path="/javascript/pure-function"
            element={<JavaScriptTopicPlaceholder topic="Pure Function" />}
          />
          <Route
            path="/javascript/iife"
            element={<JavaScriptTopicPlaceholder topic="IIFE" />}
          />
          <Route path="/javascript/closure" element={<ClosurePage />} />
          <Route path="/javascript/event-loop" element={<EventLoopPage />} />
          <Route
            path="/javascript/callbacks"
            element={<JavaScriptTopicPlaceholder topic="Callbacks" />}
          />
          <Route path="/javascript/promises" element={<PromisesPage />} />
          <Route path="/javascript/async-await" element={<AsyncAwaitPage />} />
          <Route
            path="/javascript/iterators"
            element={<JavaScriptTopicPlaceholder topic="Iterators" />}
          />
          <Route
            path="/javascript/generators"
            element={<JavaScriptTopicPlaceholder topic="Generators" />}
          />
          <Route
            path="/javascript/prototypes"
            element={<JavaScriptTopicPlaceholder topic="Prototypes" />}
          />
          <Route
            path="/javascript/this-keyword"
            element={<JavaScriptTopicPlaceholder topic="this Keyword" />}
          />
          <Route
            path="/javascript/array-map-filter-reduce"
            element={
              <JavaScriptTopicPlaceholder topic="Array: map, filter, reduce" />
            }
          />
          <Route
            path="/javascript/array-foreach-find"
            element={
              <JavaScriptTopicPlaceholder topic="Array: forEach, find, findIndex" />
            }
          />
          <Route
            path="/javascript/array-some-every"
            element={
              <JavaScriptTopicPlaceholder topic="Array: some, every, includes" />
            }
          />
          <Route
            path="/javascript/array-slice-splice"
            element={
              <JavaScriptTopicPlaceholder topic="Array: slice, splice, concat" />
            }
          />

          {/* ReactJs Section with nested routes */}
          <Route path="/reactjs" element={<ReactJsPage />}>
            {/* Hooks */}
            <Route path="use-state" element={<UseStateHook />} />
            <Route path="use-effect" element={<UseEffectHook />} />
            <Route path="use-ref" element={<UseRefHook />} />
            <Route path="use-context" element={<UseContextHook />} />
            <Route path="use-reducer" element={<UseReducerHook />} />
            <Route path="use-memo" element={<UseMemoHook />} />
            <Route path="use-callback" element={<UseCallbackHook />} />
            <Route
              path="custom-hooks"
              element={<ReactTopicPlaceholder topic="Custom Hooks" />}
            />

            {/* Core Concepts */}
            <Route path="jsx" element={<JSXPage />} />
            <Route path="components" element={<ComponentsPage />} />
            <Route path="props" element={<PropsPage />} />
            <Route
              path="state-management"
              element={<ReactTopicPlaceholder topic="State Management" />}
            />
            <Route
              path="event-handling"
              element={<ReactTopicPlaceholder topic="Event Handling" />}
            />
            <Route
              path="conditional-rendering"
              element={<ReactTopicPlaceholder topic="Conditional Rendering" />}
            />
            <Route
              path="lists-keys"
              element={<ReactTopicPlaceholder topic="Lists & Keys" />}
            />

            {/* Advanced */}
            <Route
              path="router"
              element={<ReactTopicPlaceholder topic="React Router" />}
            />
            <Route
              path="context-api"
              element={<ReactTopicPlaceholder topic="Context API" />}
            />
            <Route
              path="hoc"
              element={
                <ReactTopicPlaceholder topic="Higher Order Components" />
              }
            />
            <Route
              path="render-props"
              element={<ReactTopicPlaceholder topic="Render Props" />}
            />
            <Route
              path="error-boundaries"
              element={<ReactTopicPlaceholder topic="Error Boundaries" />}
            />
            <Route
              path="portals"
              element={<ReactTopicPlaceholder topic="Portals" />}
            />
            <Route
              path="refs-dom"
              element={<ReactTopicPlaceholder topic="Refs & DOM" />}
            />

            {/* Performance */}
            <Route
              path="react-memo"
              element={<ReactTopicPlaceholder topic="React.memo" />}
            />
            <Route
              path="code-splitting"
              element={<ReactTopicPlaceholder topic="Code Splitting" />}
            />
            <Route
              path="lazy-loading"
              element={<ReactTopicPlaceholder topic="Lazy Loading" />}
            />
            <Route
              path="optimization"
              element={<ReactTopicPlaceholder topic="Optimization Tips" />}
            />

            {/* Forms & Data */}
            <Route
              path="controlled-components"
              element={<ReactTopicPlaceholder topic="Controlled Components" />}
            />
            <Route
              path="uncontrolled-components"
              element={
                <ReactTopicPlaceholder topic="Uncontrolled Components" />
              }
            />
            <Route
              path="form-validation"
              element={<ReactTopicPlaceholder topic="Form Validation" />}
            />
            <Route
              path="api-integration"
              element={<ReactTopicPlaceholder topic="API Integration" />}
            />

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
