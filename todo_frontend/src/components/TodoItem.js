import React from "react";

/**
 * PUBLIC_INTERFACE
 * Renders a single todo item with toggle and delete actions.
 * @param {{ todo: import('../types').Todo, onToggle: (id: string) => void, onDelete: (id: string) => void }} props
 */
export default function TodoItem({ todo, onToggle, onDelete }) {
  const toggleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle(todo.id);
    }
  };

  return (
    <li className="todo-item">
      <div className="todo-left">
        <input
          id={`todo-${todo.id}`}
          type="checkbox"
          className="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-checked={todo.completed}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`todo-text ${todo.completed ? "completed" : ""}`}
          tabIndex={0}
          onKeyDown={toggleKeyDown}
          aria-label={`Todo: ${todo.text}`}
        >
          {todo.text}
        </label>
      </div>
      <button
        type="button"
        className="icon-btn"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete todo: ${todo.text}`}
        title="Delete"
      >
        ✕
      </button>
    </li>
  );
}
