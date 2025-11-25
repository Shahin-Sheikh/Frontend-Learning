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
      subItems: [],
    },
    {
      title: "ReactJs",
      path: "/reactjs",
      icon: "⚛️",
      subItems: [
        { name: "useState", path: "/reactjs/use-state" },
        { name: "useEffect", path: "/reactjs/use-effect" },
        { name: "useRef", path: "/reactjs/use-ref" },
        { name: "useContext", path: "/reactjs/use-context" },
        { name: "useReducer", path: "/reactjs/use-reducer" },
        { name: "useMemo", path: "/reactjs/use-memo" },
        { name: "useCallback", path: "/reactjs/use-callback" },
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
    setExpandedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
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
                fontWeight: "bold",
                fontSize: "14px",
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
                  borderRadius: "8px",
                  padding: "10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  minWidth: "200px",
                  zIndex: 1001,
                }}
              >
                {section.subItems.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    style={{
                      display: "block",
                      padding: "10px 14px",
                      margin: "5px 0",
                      borderRadius: "12px",
                      border: "2px solid",
                      borderColor:
                        location.pathname === subItem.path ? "#845ef7" : "#555",
                      backgroundColor:
                        location.pathname === subItem.path
                          ? "rgba(132, 94, 247, 0.2)"
                          : "transparent",
                      color: "white",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: "500",
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
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.borderColor = "#555";
                      }
                    }}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
