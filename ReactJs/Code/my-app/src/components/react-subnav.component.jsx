import { Link, useLocation } from "react-router-dom";

export default function ReactSubNav() {
  const location = useLocation();

  const hooks = [
    { id: "useState", name: "useState", path: "/reactjs/use-state" },
    { id: "useEffect", name: "useEffect", path: "/reactjs/use-effect" },
    { id: "useRef", name: "useRef", path: "/reactjs/use-ref" },
    { id: "useContext", name: "useContext", path: "/reactjs/use-context" },
    { id: "useReducer", name: "useReducer", path: "/reactjs/use-reducer" },
    { id: "useMemo", name: "useMemo", path: "/reactjs/use-memo" },
    { id: "useCallback", name: "useCallback", path: "/reactjs/use-callback" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      style={{
        backgroundColor: "#3d3d3d",
        padding: "10px 20px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {hooks.map((hook) => (
          <Link
            key={hook.id}
            to={hook.path}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "2px solid",
              borderColor: isActive(hook.path) ? "#845ef7" : "transparent",
              backgroundColor: isActive(hook.path) ? "#845ef7" : "transparent",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "13px",
              transition: "all 0.3s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              if (!isActive(hook.path)) {
                e.target.style.backgroundColor = "#4d4d4d";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive(hook.path)) {
                e.target.style.backgroundColor = "transparent";
              }
            }}
          >
            {hook.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
