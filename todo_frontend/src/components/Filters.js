import React from "react";

/**
 * PUBLIC_INTERFACE
 * Filter controls for the todo list.
 * @param {{ current: "all"|"active"|"completed", onChange: (f: "all"|"active"|"completed") => void }} props
 */
export default function Filters({ current, onChange }) {
  const buttons = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <div className="filters" role="tablist" aria-label="Todo filters">
      {buttons.map((b) => (
        <button
          key={b.key}
          type="button"
          role="tab"
          aria-selected={current === b.key}
          className={`btn ghost ${current === b.key ? "active" : ""}`}
          onClick={() => onChange(b.key)}
        >
          {b.label}
        </button>
      ))}
    </div>
  );
}
