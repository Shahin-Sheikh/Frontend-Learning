import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState({});
  const navRef = useRef(null);

  const navSections = [
    {
      title: "Code Playground",
      path: "/playground",
      icon: "💻",
      subItems: [],
    },
    {
      title: "JavaScript",
      path: "/javascript",
      icon: "🟨",
      subItems: [
        {
          name: "Core Concepts",
          path: "/javascript/core",
          isCategory: true,
          children: [
            { name: "Syntax Parser", path: "/javascript/syntax-parser" },
            {
              name: "Lexical Environment",
              path: "/javascript/lexical-environment",
            },
            {
              name: "Execution Context",
              path: "/javascript/execution-context",
            },
            { name: "Hoisting", path: "/javascript/hoisting" },
            { name: "Scope Chain", path: "/javascript/scope-chain" },
          ],
        },
        {
          name: "Functions",
          path: "/javascript/functions",
          isCategory: true,
          children: [
            {
              name: "First Class Function",
              path: "/javascript/first-class-function",
            },
            {
              name: "First Order Function",
              path: "/javascript/first-order-function",
            },
            {
              name: "Higher Order Function",
              path: "/javascript/higher-order-function",
            },
            { name: "Pure Function", path: "/javascript/pure-function" },
            { name: "IIFE", path: "/javascript/iife" },
            { name: "Closure", path: "/javascript/closure" },
          ],
        },
        {
          name: "Async Programming",
          path: "/javascript/async",
          isCategory: true,
          children: [
            { name: "Event Loop", path: "/javascript/event-loop" },
            { name: "Callbacks", path: "/javascript/callbacks" },
            { name: "Promises", path: "/javascript/promises" },
            { name: "Async/Await", path: "/javascript/async-await" },
          ],
        },
        {
          name: "Advanced Concepts",
          path: "/javascript/advanced",
          isCategory: true,
          children: [
            { name: "Iterators", path: "/javascript/iterators" },
            { name: "Generators", path: "/javascript/generators" },
            { name: "Prototypes", path: "/javascript/prototypes" },
            { name: "this Keyword", path: "/javascript/this-keyword" },
          ],
        },
        {
          name: "Array Methods",
          path: "/javascript/array-methods",
          isCategory: true,
          children: [
            {
              name: "map, filter, reduce",
              path: "/javascript/array-map-filter-reduce",
            },
            {
              name: "forEach, find, findIndex",
              path: "/javascript/array-foreach-find",
            },
            {
              name: "some, every, includes",
              path: "/javascript/array-some-every",
            },
            {
              name: "slice, splice, concat",
              path: "/javascript/array-slice-splice",
            },
          ],
        },
      ],
    },
    {
      title: "ReactJs",
      path: "/reactjs",
      icon: "⚛️",
      subItems: [
        {
          name: "Hooks",
          path: "/reactjs/hooks",
          isCategory: true,
          children: [
            { name: "useState", path: "/reactjs/use-state" },
            { name: "useEffect", path: "/reactjs/use-effect" },
            { name: "useRef", path: "/reactjs/use-ref" },
            { name: "useContext", path: "/reactjs/use-context" },
            { name: "useReducer", path: "/reactjs/use-reducer" },
            { name: "useMemo", path: "/reactjs/use-memo" },
            { name: "useCallback", path: "/reactjs/use-callback" },
            { name: "Custom Hooks", path: "/reactjs/custom-hooks" },
          ],
        },
        {
          name: "Core Concepts",
          path: "/reactjs/core",
          isCategory: true,
          children: [
            { name: "JSX", path: "/reactjs/jsx" },
            { name: "Components", path: "/reactjs/components" },
            { name: "Props", path: "/reactjs/props" },
            { name: "State Management", path: "/reactjs/state-management" },
            { name: "Event Handling", path: "/reactjs/event-handling" },
            {
              name: "Conditional Rendering",
              path: "/reactjs/conditional-rendering",
            },
            { name: "Lists & Keys", path: "/reactjs/lists-keys" },
          ],
        },
        {
          name: "Advanced",
          path: "/reactjs/advanced",
          isCategory: true,
          children: [
            { name: "React Router", path: "/reactjs/router" },
            { name: "Context API", path: "/reactjs/context-api" },
            { name: "Higher Order Components", path: "/reactjs/hoc" },
            { name: "Render Props", path: "/reactjs/render-props" },
            { name: "Error Boundaries", path: "/reactjs/error-boundaries" },
            { name: "Portals", path: "/reactjs/portals" },
            { name: "Refs & DOM", path: "/reactjs/refs-dom" },
          ],
        },
        {
          name: "Performance",
          path: "/reactjs/performance",
          isCategory: true,
          children: [
            { name: "React.memo", path: "/reactjs/react-memo" },
            { name: "Code Splitting", path: "/reactjs/code-splitting" },
            { name: "Lazy Loading", path: "/reactjs/lazy-loading" },
            { name: "Optimization Tips", path: "/reactjs/optimization" },
          ],
        },
        {
          name: "Forms & Data",
          path: "/reactjs/forms",
          isCategory: true,
          children: [
            {
              name: "Controlled Components",
              path: "/reactjs/controlled-components",
            },
            {
              name: "Uncontrolled Components",
              path: "/reactjs/uncontrolled-components",
            },
            { name: "Form Validation", path: "/reactjs/form-validation" },
            { name: "API Integration", path: "/reactjs/api-integration" },
          ],
        },
      ],
    },
    {
      title: "NextJs",
      path: "/nextjs",
      icon: "▲",
      subItems: [],
    },
    {
      title: "Others",
      path: "/others",
      icon: "📦",
      subItems: [],
    },
  ];

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  const toggleSection = (sectionTitle) => {
    setExpandedSections((prev) => {
      // If clicking the same section, close it
      if (prev[sectionTitle]) {
        return {};
      }
      // Otherwise, close all others and open this one
      return { [sectionTitle]: true };
    });
  };

  const closeAllSections = () => {
    setExpandedSections({});
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllSections();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    closeAllSections();
  }, [location.pathname]);

  return (
    <nav
      ref={navRef}
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
          alignItems: "flex-start",
        }}
      >
        {navSections.map((section) => (
          <div key={section.path} style={{ position: "relative" }}>
            <Link
              to={section.path}
              style={{
                padding: "10px 20px",
                borderRadius: "20px",
                border: "2px solid",
                borderColor: isActive(section.path) ? "#845ef7" : "#555",
                backgroundColor: isActive(section.path)
                  ? "rgba(132, 94, 247, 0.2)"
                  : "transparent",
                color: "white",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                fontWeight: "600",
                fontSize: "14px",
                letterSpacing: "0.01em",
                transition: "all 0.3s ease",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              onMouseEnter={(e) => {
                if (!isActive(section.path)) {
                  e.currentTarget.style.backgroundColor = "#3d3d3d";
                  e.currentTarget.style.borderColor = "#845ef7";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(section.path)) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "#555";
                }
              }}
            >
              <span>{section.icon}</span>
              <span>{section.title}</span>
              {section.subItems.length > 0 && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSection(section.title);
                  }}
                  style={{
                    fontSize: "14px",
                    marginLeft: "4px",
                    display: "inline-block",
                    transition: "transform 0.3s ease",
                    transform: expandedSections[section.title]
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              )}
            </Link>

            {section.subItems.length > 0 && expandedSections[section.title] && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  marginTop: "10px",
                  backgroundColor: "#3d3d3d",
                  borderRadius: "12px",
                  padding: "15px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  minWidth: "280px",
                  maxWidth: "320px",
                  zIndex: 1001,
                  maxHeight: "70vh",
                  overflowY: "auto",
                }}
              >
                {section.subItems.map((subItem) => (
                  <div key={subItem.path}>
                    {subItem.isCategory ? (
                      <div style={{ marginBottom: "15px" }}>
                        <div
                          style={{
                            color: "#845ef7",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "11px",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "0.8px",
                            marginBottom: "8px",
                            paddingLeft: "4px",
                          }}
                        >
                          {subItem.name}
                        </div>
                        {subItem.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            style={{
                              display: "block",
                              padding: "8px 12px",
                              margin: "4px 0",
                              marginLeft: "8px",
                              borderRadius: "8px",
                              border: "1px solid",
                              borderColor:
                                location.pathname === child.path
                                  ? "#845ef7"
                                  : "#555",
                              backgroundColor:
                                location.pathname === child.path
                                  ? "rgba(132, 94, 247, 0.2)"
                                  : "transparent",
                              color: "white",
                              textDecoration: "none",
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "13px",
                              fontWeight: "400",
                              letterSpacing: "0.01em",
                              transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              if (location.pathname !== child.path) {
                                e.currentTarget.style.backgroundColor =
                                  "#4d4d4d";
                                e.currentTarget.style.borderColor = "#845ef7";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (location.pathname !== child.path) {
                                e.currentTarget.style.backgroundColor =
                                  "transparent";
                                e.currentTarget.style.borderColor = "#555";
                              }
                            }}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={subItem.path}
                        style={{
                          display: "block",
                          padding: "10px 14px",
                          margin: "5px 0",
                          borderRadius: "12px",
                          border: "2px solid",
                          borderColor:
                            location.pathname === subItem.path
                              ? "#845ef7"
                              : "#555",
                          backgroundColor:
                            location.pathname === subItem.path
                              ? "rgba(132, 94, 247, 0.2)"
                              : "transparent",
                          color: "white",
                          textDecoration: "none",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "13px",
                          fontWeight: "500",
                          letterSpacing: "0.01em",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          if (location.pathname !== subItem.path) {
                            e.currentTarget.style.backgroundColor = "#4d4d4d";
                            e.currentTarget.style.borderColor = "#845ef7";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (location.pathname !== subItem.path) {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.borderColor = "#555";
                          }
                        }}
                      >
                        {subItem.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
