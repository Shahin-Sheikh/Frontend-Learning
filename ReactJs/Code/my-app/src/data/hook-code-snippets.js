// Color scheme matching VS Code Dark+ theme
const colors = {
  keyword: "#c586c0", // purple - import, const, function, return, etc.
  function: "#dcdcaa", // yellow - function names
  variable: "#9cdcfe", // light blue - variables
  string: "#ce9178", // orange - strings
  number: "#b5cea8", // light green - numbers
  comment: "#6a9955", // green - comments
  text: "#d4d4d4", // white - default text
  tag: "#4ec9b0", // teal - JSX tags
  bracket: "#808080", // gray - JSX brackets
  property: "#9cdcfe", // light blue - object properties
};

const c = (color, text) => `<span style="color: ${color}">${text}</span>`;

export const useStateCode = `${c(colors.keyword, "import")} ${c(
  colors.variable,
  "React"
)}${c(colors.text, ", { ")}${c(colors.variable, "useState")}${c(
  colors.text,
  " } "
)}${c(colors.keyword, "from")} ${c(colors.string, "'react'")};

${c(colors.keyword, "function")} ${c(colors.function, "Counter")}${c(
  colors.text,
  "() {"
)}
  ${c(colors.comment, "// Declare state variable")}
  ${c(colors.keyword, "const")} ${c(colors.text, "[")}${c(
  colors.variable,
  "count"
)}${c(colors.text, ", ")}${c(colors.variable, "setCount")}${c(
  colors.text,
  "] = "
)}${c(colors.function, "useState")}${c(colors.text, "(")}${c(
  colors.number,
  "0"
)}${c(colors.text, ");")}

  ${c(colors.comment, "// Update state on button click")}
  ${c(colors.keyword, "const")} ${c(colors.variable, "increment")} ${c(
  colors.text,
  "= () "
)}${c(colors.keyword, "=>")} ${c(colors.text, "{")}
    ${c(colors.function, "setCount")}${c(colors.text, "(")}${c(
  colors.variable,
  "count"
)} ${c(colors.text, "+ ")}${c(colors.number, "1")}${c(colors.text, ");")}
  ${c(colors.text, "};")}

  ${c(colors.keyword, "return")} ${c(colors.text, "(")}
    ${c(colors.bracket, "<")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "h1")}${c(
  colors.bracket,
  ">"
)}${c(colors.text, "Count: {")}${c(colors.variable, "count")}${c(
  colors.text,
  "}"
)}${c(colors.bracket, "</")}${c(colors.tag, "h1")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "button")} ${c(
  colors.property,
  "onClick"
)}${c(colors.text, "={")}${c(colors.variable, "increment")}${c(
  colors.text,
  "}"
)}${c(colors.bracket, ">")}
        ${c(colors.text, "Increment")}
      ${c(colors.bracket, "</")}${c(colors.tag, "button")}${c(
  colors.bracket,
  ">"
)}
    ${c(colors.bracket, "</")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
  ${c(colors.text, ");")}
${c(colors.text, "}")}

${c(colors.keyword, "export")} ${c(colors.keyword, "default")} ${c(
  colors.function,
  "Counter"
)};`;

export const useEffectCode = `${c(colors.keyword, "import")} ${c(
  colors.variable,
  "React"
)}${c(colors.text, ", { ")}${c(colors.variable, "useState")}${c(
  colors.text,
  ", "
)}${c(colors.variable, "useEffect")}${c(colors.text, " } ")}${c(
  colors.keyword,
  "from"
)} ${c(colors.string, "'react'")};

${c(colors.keyword, "function")} ${c(colors.function, "Timer")}${c(
  colors.text,
  "() {"
)}
  ${c(colors.keyword, "const")} ${c(colors.text, "[")}${c(
  colors.variable,
  "seconds"
)}${c(colors.text, ", ")}${c(colors.variable, "setSeconds")}${c(
  colors.text,
  "] = "
)}${c(colors.function, "useState")}${c(colors.text, "(")}${c(
  colors.number,
  "0"
)}${c(colors.text, ");")}

  ${c(colors.comment, "// Side effect: Set up interval")}
  ${c(colors.function, "useEffect")}${c(colors.text, "(() => {")}
    ${c(colors.keyword, "const")} ${c(colors.variable, "interval")} ${c(
  colors.text,
  "= "
)}${c(colors.function, "setInterval")}${c(colors.text, "(() => {")}
      ${c(colors.function, "setSeconds")}${c(colors.text, "(")}${c(
  colors.variable,
  "s"
)} ${c(colors.keyword, "=>")} ${c(colors.variable, "s")} ${c(
  colors.text,
  "+ "
)}${c(colors.number, "1")}${c(colors.text, ");")}
    ${c(colors.text, "}, ")}${c(colors.number, "1000")}${c(colors.text, ");")}

    ${c(colors.comment, "// Cleanup function")}
    ${c(colors.keyword, "return")} ${c(colors.text, "() => ")}${c(
  colors.function,
  "clearInterval"
)}${c(colors.text, "(")}${c(colors.variable, "interval")}${c(colors.text, ");")}
  ${c(colors.text, "}, []); ")}${c(colors.comment, "// Empty deps = runs once")}

  ${c(colors.keyword, "return")} ${c(colors.bracket, "<")}${c(
  colors.tag,
  "h1"
)}${c(colors.bracket, ">")}${c(colors.text, "Seconds: {")}${c(
  colors.variable,
  "seconds"
)}${c(colors.text, "}")}${c(colors.bracket, "</")}${c(colors.tag, "h1")}${c(
  colors.bracket,
  ">"
)}${c(colors.text, ";")}
${c(colors.text, "}")}

${c(colors.keyword, "export")} ${c(colors.keyword, "default")} ${c(
  colors.function,
  "Timer"
)};`;

// React Concepts Code Snippets
export const componentsCode = `${c(colors.comment, "// Function Component")}
${c(colors.keyword, "function")} ${c(colors.function, "Welcome")}${c(
  colors.text,
  "() {"
)}
  ${c(colors.keyword, "return")} ${c(colors.bracket, "<")}${c(
  colors.tag,
  "h1"
)}${c(colors.bracket, ">")}${c(colors.text, "Hello, World!")}${c(
  colors.bracket,
  "</"
)}${c(colors.tag, "h1")}${c(colors.bracket, ">")}${c(colors.text, ";")}
${c(colors.text, "}")}

${c(colors.comment, "// Component with Props")}
${c(colors.keyword, "function")} ${c(colors.function, "Greeting")}${c(
  colors.text,
  "({ "
)}${c(colors.variable, "name")}${c(colors.text, " }) {")}
  ${c(colors.keyword, "return")} ${c(colors.bracket, "<")}${c(
  colors.tag,
  "h1"
)}${c(colors.bracket, ">")}${c(colors.text, "Hello, {")}${c(
  colors.variable,
  "name"
)}${c(colors.text, "}!")}${c(colors.bracket, "</")}${c(colors.tag, "h1")}${c(
  colors.bracket,
  ">"
)}${c(colors.text, ";")}
${c(colors.text, "}")}

${c(colors.comment, "// Component Composition")}
${c(colors.keyword, "function")} ${c(colors.function, "App")}${c(
  colors.text,
  "() {"
)}
  ${c(colors.keyword, "return")} ${c(colors.text, "(")}
    ${c(colors.bracket, "<")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "Welcome")} ${c(
  colors.text,
  "/>"
)}
      ${c(colors.bracket, "<")}${c(colors.tag, "Greeting")} ${c(
  colors.property,
  "name"
)}${c(colors.text, '="')}${c(colors.string, "John")}${c(colors.text, '" />')}
    ${c(colors.bracket, "</")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
  ${c(colors.text, ");")}
${c(colors.text, "}")}

${c(colors.keyword, "export")} ${c(colors.keyword, "default")} ${c(
  colors.function,
  "App"
)};`;

export const jsxCode = `${c(colors.comment, "// JSX Basics")}
${c(colors.keyword, "const")} ${c(colors.variable, "element")} ${c(
  colors.text,
  "= "
)}${c(colors.bracket, "<")}${c(colors.tag, "h1")}${c(colors.bracket, ">")}${c(
  colors.text,
  "Hello, World!"
)}${c(colors.bracket, "</")}${c(colors.tag, "h1")}${c(colors.bracket, ">")}${c(
  colors.text,
  ";"
)}

${c(colors.comment, "// JSX with Expressions")}
${c(colors.keyword, "const")} ${c(colors.variable, "name")} ${c(
  colors.text,
  "= "
)}${c(colors.string, '"John"')};
${c(colors.keyword, "const")} ${c(colors.variable, "greeting")} ${c(
  colors.text,
  "= "
)}${c(colors.bracket, "<")}${c(colors.tag, "h1")}${c(colors.bracket, ">")}${c(
  colors.text,
  "Hello, {"
)}${c(colors.variable, "name")}${c(colors.text, "}!")}${c(
  colors.bracket,
  "</"
)}${c(colors.tag, "h1")}${c(colors.bracket, ">")}${c(colors.text, ";")}

${c(colors.comment, "// JSX with Attributes")}
${c(colors.keyword, "const")} ${c(colors.variable, "img")} ${c(
  colors.text,
  "= ("
)}
  ${c(colors.bracket, "<")}${c(colors.tag, "img")} 
    ${c(colors.property, "src")}${c(colors.text, '="')}${c(
  colors.string,
  "photo.jpg"
)}${c(colors.text, '" ')}
    ${c(colors.property, "alt")}${c(colors.text, '="')}${c(
  colors.string,
  "Photo"
)}${c(colors.text, '" ')}
    ${c(colors.property, "className")}${c(colors.text, '="')}${c(
  colors.string,
  "image"
)}${c(colors.text, '"')}
  ${c(colors.text, "/>")}
${c(colors.text, ");")}

${c(colors.comment, "// Conditional Rendering")}
${c(colors.keyword, "function")} ${c(colors.function, "Message")}${c(
  colors.text,
  "({ "
)}${c(colors.variable, "isLoggedIn")}${c(colors.text, " }) {")}
  ${c(colors.keyword, "return")} ${c(colors.text, "(")}
    ${c(colors.bracket, "<")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
      ${c(colors.text, "{")}${c(colors.variable, "isLoggedIn")} ${c(
  colors.text,
  "? ("
)}
        ${c(colors.bracket, "<")}${c(colors.tag, "p")}${c(
  colors.bracket,
  ">"
)}${c(colors.text, "Welcome back!")}${c(colors.bracket, "</")}${c(
  colors.tag,
  "p"
)}${c(colors.bracket, ">")}
      ${c(colors.text, ") : (")}
        ${c(colors.bracket, "<")}${c(colors.tag, "p")}${c(
  colors.bracket,
  ">"
)}${c(colors.text, "Please log in")}${c(colors.bracket, "</")}${c(
  colors.tag,
  "p"
)}${c(colors.bracket, ">")}
      ${c(colors.text, ")}")}
    ${c(colors.bracket, "</")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
  ${c(colors.text, ");")}
${c(colors.text, "}")}`;

export const propsCode = `${c(colors.comment, "// Passing Props")}
${c(colors.keyword, "function")} ${c(colors.function, "Welcome")}${c(
  colors.text,
  "({ "
)}${c(colors.variable, "name")}${c(colors.text, ", ")}${c(
  colors.variable,
  "age"
)}${c(colors.text, " }) {")}
  ${c(colors.keyword, "return")} ${c(colors.text, "(")}
    ${c(colors.bracket, "<")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "h1")}${c(
  colors.bracket,
  ">"
)}${c(colors.text, "Hello, {")}${c(colors.variable, "name")}${c(
  colors.text,
  "}!"
)}${c(colors.bracket, "</")}${c(colors.tag, "h1")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "p")}${c(
  colors.bracket,
  ">"
)}${c(colors.text, "Age: {")}${c(colors.variable, "age")}${c(
  colors.text,
  "}"
)}${c(colors.bracket, "</")}${c(colors.tag, "p")}${c(colors.bracket, ">")}
    ${c(colors.bracket, "</")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
  ${c(colors.text, ");")}
${c(colors.text, "}")}

${c(colors.comment, "// Using Components with Props")}
${c(colors.keyword, "function")} ${c(colors.function, "App")}${c(
  colors.text,
  "() {"
)}
  ${c(colors.keyword, "return")} ${c(colors.text, "(")}
    ${c(colors.bracket, "<")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "Welcome")} ${c(
  colors.property,
  "name"
)}${c(colors.text, '="')}${c(colors.string, "John")}${c(colors.text, '" ')}${c(
  colors.property,
  "age"
)}${c(colors.text, "={")}${c(colors.number, "25")}${c(colors.text, "} />")}
      ${c(colors.bracket, "<")}${c(colors.tag, "Welcome")} ${c(
  colors.property,
  "name"
)}${c(colors.text, '="')}${c(colors.string, "Jane")}${c(colors.text, '" ')}${c(
  colors.property,
  "age"
)}${c(colors.text, "={")}${c(colors.number, "30")}${c(colors.text, "} />")}
    ${c(colors.bracket, "</")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
  ${c(colors.text, ");")}
${c(colors.text, "}")}

${c(colors.comment, "// Props with Children")}
${c(colors.keyword, "function")} ${c(colors.function, "Card")}${c(
  colors.text,
  "({ "
)}${c(colors.variable, "title")}${c(colors.text, ", ")}${c(
  colors.variable,
  "children"
)}${c(colors.text, " }) {")}
  ${c(colors.keyword, "return")} ${c(colors.text, "(")}
    ${c(colors.bracket, "<")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "h2")}${c(
  colors.bracket,
  ">"
)}${c(colors.text, "{")}${c(colors.variable, "title")}${c(colors.text, "}")}${c(
  colors.bracket,
  "</"
)}${c(colors.tag, "h2")}${c(colors.bracket, ">")}
      ${c(colors.text, "{")}${c(colors.variable, "children")}${c(
  colors.text,
  "}"
)}
    ${c(colors.bracket, "</")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
  ${c(colors.text, ");")}
${c(colors.text, "}")}`;

export const customHooksCode = `${c(
  colors.comment,
  "// Custom Hook - useToggle"
)}
${c(colors.keyword, "function")} ${c(colors.function, "useToggle")}${c(
  colors.text,
  "("
)}${c(colors.variable, "initialValue")} ${c(colors.text, "= ")}${c(
  colors.keyword,
  "false"
)}${c(colors.text, ") {")}
  ${c(colors.keyword, "const")} ${c(colors.text, "[")}${c(
  colors.variable,
  "value"
)}${c(colors.text, ", ")}${c(colors.variable, "setValue")}${c(
  colors.text,
  "] = "
)}${c(colors.function, "useState")}${c(colors.text, "(")}${c(
  colors.variable,
  "initialValue"
)}${c(colors.text, ");")}
  
  ${c(colors.keyword, "const")} ${c(colors.variable, "toggle")} ${c(
  colors.text,
  "= "
)}${c(colors.function, "useCallback")}${c(colors.text, "(() => {")}
    ${c(colors.function, "setValue")}${c(colors.text, "(")}${c(
  colors.variable,
  "v"
)} ${c(colors.keyword, "=>")} ${c(colors.text, "!")}${c(
  colors.variable,
  "v"
)}${c(colors.text, ");")}
  ${c(colors.text, "}, []);")}
  
  ${c(colors.keyword, "return")} ${c(colors.text, "[")}${c(
  colors.variable,
  "value"
)}${c(colors.text, ", ")}${c(colors.variable, "toggle")}${c(colors.text, "];")}
${c(colors.text, "}")}

${c(colors.comment, "// Using Custom Hook")}
${c(colors.keyword, "function")} ${c(colors.function, "App")}${c(
  colors.text,
  "() {"
)}
  ${c(colors.keyword, "const")} ${c(colors.text, "[")}${c(
  colors.variable,
  "isOn"
)}${c(colors.text, ", ")}${c(colors.variable, "toggleIsOn")}${c(
  colors.text,
  "] = "
)}${c(colors.function, "useToggle")}${c(colors.text, "();")}
  
  ${c(colors.keyword, "return")} ${c(colors.text, "(")}
    ${c(colors.bracket, "<")}${c(colors.tag, "button")} ${c(
  colors.property,
  "onClick"
)}${c(colors.text, "={")}${c(colors.variable, "toggleIsOn")}${c(
  colors.text,
  "}"
)}${c(colors.bracket, ">")}
      ${c(colors.text, "{")}${c(colors.variable, "isOn")} ${c(
  colors.text,
  "? "
)}${c(colors.string, "'ON'")} ${c(colors.text, ": ")}${c(
  colors.string,
  "'OFF'"
)}${c(colors.text, "}")}
    ${c(colors.bracket, "</")}${c(colors.tag, "button")}${c(
  colors.bracket,
  ">"
)}
  ${c(colors.text, ");")}
${c(colors.text, "}")}`;

export const virtualDOMCode = `${c(
  colors.comment,
  "// Virtual DOM Representation"
)}
${c(colors.keyword, "const")} ${c(colors.variable, "vdom")} ${c(
  colors.text,
  "= {"
)}
  ${c(colors.property, "type")}: ${c(colors.string, "'div'")},
  ${c(colors.property, "props")}: {
    ${c(colors.property, "children")}: [
      { ${c(colors.property, "type")}: ${c(colors.string, "'h1'")}, ${c(
  colors.property,
  "props"
)}: { ${c(colors.property, "children")}: ${c(colors.string, "'Hello'")} } },
      { ${c(colors.property, "type")}: ${c(colors.string, "'p'")}, ${c(
  colors.property,
  "props"
)}: { ${c(colors.property, "children")}: ${c(colors.string, "'Count: 0'")} } }
    ]
  }
${c(colors.text, "};")}

${c(colors.comment, "// React Reconciliation")}
${c(colors.keyword, "function")} ${c(colors.function, "Counter")}${c(
  colors.text,
  "() {"
)}
  ${c(colors.keyword, "const")} ${c(colors.text, "[")}${c(
  colors.variable,
  "count"
)}${c(colors.text, ", ")}${c(colors.variable, "setCount")}${c(
  colors.text,
  "] = "
)}${c(colors.function, "useState")}${c(colors.text, "(")}${c(
  colors.number,
  "0"
)}${c(colors.text, ");")}
  
  ${c(colors.comment, "// React updates only changed nodes")}
  ${c(colors.keyword, "return")} ${c(colors.text, "(")}
    ${c(colors.bracket, "<")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "h1")}${c(
  colors.bracket,
  ">"
)}${c(colors.text, "Hello")}${c(colors.bracket, "</")}${c(colors.tag, "h1")}${c(
  colors.bracket,
  ">"
)}
      ${c(colors.bracket, "<")}${c(colors.tag, "p")}${c(
  colors.bracket,
  ">"
)}${c(colors.text, "Count: {")}${c(colors.variable, "count")}${c(
  colors.text,
  "}"
)}${c(colors.bracket, "</")}${c(colors.tag, "p")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "button")} ${c(
  colors.property,
  "onClick"
)}${c(colors.text, "={() => ")}${c(colors.function, "setCount")}${c(
  colors.text,
  "("
)}${c(colors.variable, "count")} ${c(colors.text, "+ ")}${c(
  colors.number,
  "1"
)}${c(colors.text, ")}")}${c(colors.bracket, ">")}
        ${c(colors.text, "Increment")}
      ${c(colors.bracket, "</")}${c(colors.tag, "button")}${c(
  colors.bracket,
  ">"
)}
    ${c(colors.bracket, "</")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
  ${c(colors.text, ");")}
${c(colors.text, "}")}`;

export const useRefCode = `${c(colors.keyword, "import")} ${c(
  colors.variable,
  "React"
)}${c(colors.text, ", { ")}${c(colors.variable, "useRef")}${c(
  colors.text,
  " } "
)}${c(colors.keyword, "from")} ${c(colors.string, "'react'")};

${c(colors.keyword, "function")} ${c(colors.function, "FocusInput")}${c(
  colors.text,
  "() {"
)}
  ${c(colors.keyword, "const")} ${c(colors.variable, "inputRef")} ${c(
  colors.text,
  "= "
)}${c(colors.function, "useRef")}${c(colors.text, "(")}${c(
  colors.keyword,
  "null"
)}${c(colors.text, ");")}

  ${c(colors.comment, "// Access DOM element directly")}
  ${c(colors.keyword, "const")} ${c(colors.variable, "handleFocus")} ${c(
  colors.text,
  "= () "
)}${c(colors.keyword, "=>")} ${c(colors.text, "{")}
    ${c(colors.variable, "inputRef")}${c(colors.text, ".")}${c(
  colors.property,
  "current"
)}${c(colors.text, ".")}${c(colors.function, "focus")}${c(colors.text, "();")}
  ${c(colors.text, "};")}

  ${c(colors.keyword, "return")} ${c(colors.text, "(")}
    ${c(colors.bracket, "<")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "input")} ${c(
  colors.property,
  "ref"
)}${c(colors.text, "={")}${c(colors.variable, "inputRef")}${c(
  colors.text,
  "} "
)}${c(colors.property, "type")}${c(colors.text, '="')}${c(
  colors.string,
  "text"
)}${c(colors.text, '" />')}
      ${c(colors.bracket, "<")}${c(colors.tag, "button")} ${c(
  colors.property,
  "onClick"
)}${c(colors.text, "={")}${c(colors.variable, "handleFocus")}${c(
  colors.text,
  "}"
)}${c(colors.bracket, ">")}
        ${c(colors.text, "Focus Input")}
      ${c(colors.bracket, "</")}${c(colors.tag, "button")}${c(
  colors.bracket,
  ">"
)}
    ${c(colors.bracket, "</")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
  ${c(colors.text, ");")}
${c(colors.text, "}")}

${c(colors.keyword, "export")} ${c(colors.keyword, "default")} ${c(
  colors.function,
  "FocusInput"
)};`;

export const useMemoCode = `${c(colors.keyword, "import")} ${c(
  colors.variable,
  "React"
)}${c(colors.text, ", { ")}${c(colors.variable, "useMemo")}${c(
  colors.text,
  ", "
)}${c(colors.variable, "useState")}${c(colors.text, " } ")}${c(
  colors.keyword,
  "from"
)} ${c(colors.string, "'react'")};

${c(colors.keyword, "function")} ${c(colors.function, "ExpensiveComponent")}${c(
  colors.text,
  "() {"
)}
  ${c(colors.keyword, "const")} ${c(colors.text, "[")}${c(
  colors.variable,
  "count"
)}${c(colors.text, ", ")}${c(colors.variable, "setCount")}${c(
  colors.text,
  "] = "
)}${c(colors.function, "useState")}${c(colors.text, "(")}${c(
  colors.number,
  "0"
)}${c(colors.text, ");")}
  ${c(colors.keyword, "const")} ${c(colors.text, "[")}${c(
  colors.variable,
  "todos"
)}${c(colors.text, ", ")}${c(colors.variable, "setTodos")}${c(
  colors.text,
  "] = "
)}${c(colors.function, "useState")}${c(colors.text, "([]);")}

  ${c(colors.comment, "// Expensive calculation memoized")}
  ${c(colors.keyword, "const")} ${c(colors.variable, "expensiveValue")} ${c(
  colors.text,
  "= "
)}${c(colors.function, "useMemo")}${c(colors.text, "(() => {")}
    ${c(colors.keyword, "let")} ${c(colors.variable, "result")} ${c(
  colors.text,
  "= "
)}${c(colors.number, "0")}${c(colors.text, ";")}
    ${c(colors.keyword, "for")} ${c(colors.text, "(")}${c(
  colors.keyword,
  "let"
)} ${c(colors.variable, "i")} ${c(colors.text, "= ")}${c(
  colors.number,
  "0"
)}${c(colors.text, "; ")}${c(colors.variable, "i")} ${c(colors.text, "< ")}${c(
  colors.number,
  "1000000"
)}${c(colors.text, "; ")}${c(colors.variable, "i")}${c(colors.text, "++) {")}
      ${c(colors.variable, "result")} ${c(colors.text, "+= ")}${c(
  colors.variable,
  "i"
)}${c(colors.text, ";")}
    ${c(colors.text, "}")}
    ${c(colors.keyword, "return")} ${c(colors.variable, "result")} ${c(
  colors.text,
  "* "
)}${c(colors.variable, "count")}${c(colors.text, ";")}
  ${c(colors.text, "}, [")}${c(colors.variable, "count")}${c(
  colors.text,
  "]); "
)}${c(colors.comment, "// Only recalc when count changes")}

  ${c(colors.keyword, "return")} ${c(colors.bracket, "<")}${c(
  colors.tag,
  "div"
)}${c(colors.bracket, ">")}${c(colors.text, "Result: {")}${c(
  colors.variable,
  "expensiveValue"
)}${c(colors.text, "}")}${c(colors.bracket, "</")}${c(colors.tag, "div")}${c(
  colors.bracket,
  ">"
)}${c(colors.text, ";")}
${c(colors.text, "}")}`;

export const useCallbackCode = `${c(colors.keyword, "import")} ${c(
  colors.variable,
  "React"
)}${c(colors.text, ", { ")}${c(colors.variable, "useCallback")}${c(
  colors.text,
  ", "
)}${c(colors.variable, "useState")}${c(colors.text, " } ")}${c(
  colors.keyword,
  "from"
)} ${c(colors.string, "'react'")};

${c(colors.keyword, "function")} ${c(colors.function, "Parent")}${c(
  colors.text,
  "() {"
)}
  ${c(colors.keyword, "const")} ${c(colors.text, "[")}${c(
  colors.variable,
  "count"
)}${c(colors.text, ", ")}${c(colors.variable, "setCount")}${c(
  colors.text,
  "] = "
)}${c(colors.function, "useState")}${c(colors.text, "(")}${c(
  colors.number,
  "0"
)}${c(colors.text, ");")}

  ${c(colors.comment, "// Memoized callback function")}
  ${c(colors.keyword, "const")} ${c(colors.variable, "handleClick")} ${c(
  colors.text,
  "= "
)}${c(colors.function, "useCallback")}${c(colors.text, "(() => {")}
    ${c(colors.function, "console")}${c(colors.text, ".")}${c(
  colors.function,
  "log"
)}${c(colors.text, "(")}${c(colors.string, "'Button clicked!'")}${c(
  colors.text,
  ");"
)}
    ${c(colors.function, "setCount")}${c(colors.text, "(")}${c(
  colors.variable,
  "c"
)} ${c(colors.keyword, "=>")} ${c(colors.variable, "c")} ${c(
  colors.text,
  "+ "
)}${c(colors.number, "1")}${c(colors.text, ");")}
  ${c(colors.text, "}, []); ")}${c(
  colors.comment,
  "// Function reference stays same"
)}

  ${c(colors.keyword, "return")} ${c(colors.text, "(")}
    ${c(colors.bracket, "<")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "p")}${c(
  colors.bracket,
  ">"
)}${c(colors.text, "Count: {")}${c(colors.variable, "count")}${c(
  colors.text,
  "}"
)}${c(colors.bracket, "</")}${c(colors.tag, "p")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "ChildButton")} ${c(
  colors.property,
  "onClick"
)}${c(colors.text, "={")}${c(colors.variable, "handleClick")}${c(
  colors.text,
  "} />"
)}
    ${c(colors.bracket, "</")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
  ${c(colors.text, ");")}
${c(colors.text, "}")}

${c(colors.comment, "// Memoized child won't re-render unnecessarily")}
${c(colors.keyword, "const")} ${c(colors.variable, "ChildButton")} ${c(
  colors.text,
  "= "
)}${c(colors.variable, "React")}${c(colors.text, ".")}${c(
  colors.function,
  "memo"
)}${c(colors.text, "(({ ")}${c(colors.variable, "onClick")}${c(
  colors.text,
  " }) => ("
)}
  ${c(colors.bracket, "<")}${c(colors.tag, "button")} ${c(
  colors.property,
  "onClick"
)}${c(colors.text, "={")}${c(colors.variable, "onClick")}${c(
  colors.text,
  "}"
)}${c(colors.bracket, ">")}${c(colors.text, "Click Me")}${c(
  colors.bracket,
  "</"
)}${c(colors.tag, "button")}${c(colors.bracket, ">")}
${c(colors.text, "));")}`;

export const useReducerCode = `${c(colors.keyword, "import")} ${c(
  colors.variable,
  "React"
)}${c(colors.text, ", { ")}${c(colors.variable, "useReducer")}${c(
  colors.text,
  " } "
)}${c(colors.keyword, "from")} ${c(colors.string, "'react'")};

${c(colors.comment, "// Reducer function")}
${c(colors.keyword, "function")} ${c(colors.function, "counterReducer")}${c(
  colors.text,
  "("
)}${c(colors.variable, "state")}${c(colors.text, ", ")}${c(
  colors.variable,
  "action"
)}${c(colors.text, ") {")}
  ${c(colors.keyword, "switch")} ${c(colors.text, "(")}${c(
  colors.variable,
  "action"
)}${c(colors.text, ".")}${c(colors.property, "type")}${c(colors.text, ") {")}
    ${c(colors.keyword, "case")} ${c(colors.string, "'INCREMENT'")}${c(
  colors.text,
  ":"
)}
      ${c(colors.keyword, "return")} ${c(colors.text, "{ ")}${c(
  colors.property,
  "count"
)}${c(colors.text, ": ")}${c(colors.variable, "state")}${c(
  colors.text,
  "."
)}${c(colors.property, "count")} ${c(colors.text, "+ ")}${c(
  colors.number,
  "1"
)} ${c(colors.text, "};")}
    ${c(colors.keyword, "case")} ${c(colors.string, "'DECREMENT'")}${c(
  colors.text,
  ":"
)}
      ${c(colors.keyword, "return")} ${c(colors.text, "{ ")}${c(
  colors.property,
  "count"
)}${c(colors.text, ": ")}${c(colors.variable, "state")}${c(
  colors.text,
  "."
)}${c(colors.property, "count")} ${c(colors.text, "- ")}${c(
  colors.number,
  "1"
)} ${c(colors.text, "};")}
    ${c(colors.keyword, "default")}${c(colors.text, ":")}
      ${c(colors.keyword, "return")} ${c(colors.variable, "state")}${c(
  colors.text,
  ";"
)}
  ${c(colors.text, "}")}
${c(colors.text, "}")}

${c(colors.keyword, "function")} ${c(colors.function, "Counter")}${c(
  colors.text,
  "() {"
)}
  ${c(colors.keyword, "const")} ${c(colors.text, "[")}${c(
  colors.variable,
  "state"
)}${c(colors.text, ", ")}${c(colors.variable, "dispatch")}${c(
  colors.text,
  "] = "
)}${c(colors.function, "useReducer")}${c(colors.text, "(")}
    ${c(colors.variable, "counterReducer")}${c(colors.text, ",")}
    ${c(colors.text, "{ ")}${c(colors.property, "count")}${c(
  colors.text,
  ": "
)}${c(colors.number, "0")} ${c(colors.text, "}")}
  ${c(colors.text, ");")}

  ${c(colors.keyword, "return")} ${c(colors.text, "(")}
    ${c(colors.bracket, "<")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "p")}${c(
  colors.bracket,
  ">"
)}${c(colors.text, "Count: {")}${c(colors.variable, "state")}${c(
  colors.text,
  "."
)}${c(colors.property, "count")}${c(colors.text, "}")}${c(
  colors.bracket,
  "</"
)}${c(colors.tag, "p")}${c(colors.bracket, ">")}
      ${c(colors.bracket, "<")}${c(colors.tag, "button")} ${c(
  colors.property,
  "onClick"
)}${c(colors.text, "={() => ")}${c(colors.function, "dispatch")}${c(
  colors.text,
  "({"
)}${c(colors.property, "type")}${c(colors.text, ": ")}${c(
  colors.string,
  "'INCREMENT'"
)}${c(colors.text, "})")}${c(colors.text, "}")}${c(colors.bracket, ">")}
        ${c(colors.text, "+")}
      ${c(colors.bracket, "</")}${c(colors.tag, "button")}${c(
  colors.bracket,
  ">"
)}
    ${c(colors.bracket, "</")}${c(colors.tag, "div")}${c(colors.bracket, ">")}
  ${c(colors.text, ");")}
${c(colors.text, "}")}`;

export const useContextCode = `${c(colors.keyword, "import")} ${c(
  colors.variable,
  "React"
)}${c(colors.text, ", { ")}${c(colors.variable, "useContext")}${c(
  colors.text,
  ", "
)}${c(colors.variable, "createContext")}${c(colors.text, " } ")}${c(
  colors.keyword,
  "from"
)} ${c(colors.string, "'react'")};

${c(colors.comment, "// Create context")}
${c(colors.keyword, "const")} ${c(colors.variable, "ThemeContext")} ${c(
  colors.text,
  "= "
)}${c(colors.function, "createContext")}${c(colors.text, "(")}${c(
  colors.string,
  "'light'"
)}${c(colors.text, ");")}

${c(colors.keyword, "function")} ${c(colors.function, "App")}${c(
  colors.text,
  "() {"
)}
  ${c(colors.keyword, "return")} ${c(colors.text, "(")}
    ${c(colors.bracket, "<")}${c(colors.tag, "ThemeContext.Provider")} ${c(
  colors.property,
  "value"
)}${c(colors.text, '="')}${c(colors.string, "dark")}${c(colors.text, '"')}${c(
  colors.bracket,
  ">"
)}
      ${c(colors.bracket, "<")}${c(colors.tag, "ThemedButton")} ${c(
  colors.text,
  "/>"
)}
    ${c(colors.bracket, "</")}${c(colors.tag, "ThemeContext.Provider")}${c(
  colors.bracket,
  ">"
)}
  ${c(colors.text, ");")}
${c(colors.text, "}")}

${c(colors.keyword, "function")} ${c(colors.function, "ThemedButton")}${c(
  colors.text,
  "() {"
)}
  ${c(colors.comment, "// Consume context value")}
  ${c(colors.keyword, "const")} ${c(colors.variable, "theme")} ${c(
  colors.text,
  "= "
)}${c(colors.function, "useContext")}${c(colors.text, "(")}${c(
  colors.variable,
  "ThemeContext"
)}${c(colors.text, ");")}

  ${c(colors.keyword, "return")} ${c(colors.text, "(")}
    ${c(colors.bracket, "<")}${c(colors.tag, "button")} ${c(
  colors.property,
  "className"
)}${c(colors.text, "={")}${c(colors.variable, "theme")}${c(
  colors.text,
  "}"
)}${c(colors.bracket, ">")}
      ${c(colors.text, "Themed Button")}
    ${c(colors.bracket, "</")}${c(colors.tag, "button")}${c(
  colors.bracket,
  ">"
)}
  ${c(colors.text, ");")}
${c(colors.text, "}")}`;
