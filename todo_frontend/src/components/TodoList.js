import React from "react";
import TodoItem from "./TodoItem";

/**
 * PUBLIC_INTERFACE
 * Renders the list of todos.
 * @param {{ todos: import('../types').Todo[], onToggle: (id: string) => void, onDelete: (id: string) => void }} props
 */
export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) {
    return (
      <p className="empty" role="status" aria-live="polite">
        Nothing here yet. Add your first task!
      </p>
    );
  }

  return (
    <ul className="todo-list" role="list">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
