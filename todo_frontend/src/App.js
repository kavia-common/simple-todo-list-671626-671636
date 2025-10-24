/* App: Root component managing todo state and filters using the Ocean Professional theme */
import React, { useMemo, useState } from "react";
import "./index.css";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { generateId } from "./types";

/**
 * Filter options
 * @typedef {"all"|"active"|"completed"} FilterKey
 */

// PUBLIC_INTERFACE
function App() {
  /** @type {[import('./types').Todo[], Function]} */
  const [todos, setTodos] = useState([]);
  /** @type {[("all"|"active"|"completed"), Function]} */
  const [filter, setFilter] = useState("all");

  const remainingCount = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos]
  );

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((t) => !t.completed);
      case "completed":
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  // PUBLIC_INTERFACE
  const addTodo = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTodo = { id: generateId(), text: trimmed, completed: false };
    setTodos((prev) => [newTodo, ...prev]);
  };

  // PUBLIC_INTERFACE
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // PUBLIC_INTERFACE
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // PUBLIC_INTERFACE
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  return (
    <div className="app-root" role="application" aria-label="Todo Application">
      <header className="app-header" role="banner">
        <h1 className="app-title">Ocean Tasks</h1>
        <p className="app-subtitle">
          Simple, focused todo list — stay on track.
        </p>
      </header>

      <main className="container" role="main">
        <section aria-labelledby="add-todo-section" className="card surface">
          <h2 id="add-todo-section" className="sr-only">
            Add a todo
          </h2>
          <TodoInput onAdd={addTodo} />
        </section>

        <section aria-labelledby="todos-section" className="card surface">
          <div className="list-header">
            <h2 id="todos-section" className="section-title">
              Todos
            </h2>
            <span className="badge" aria-live="polite">
              {remainingCount} remaining
            </span>
          </div>

          <TodoList
            todos={filteredTodos}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />

          <div className="controls">
            <Filters current={filter} onChange={setFilter} />
            <button
              type="button"
              className="btn danger"
              onClick={clearCompleted}
              disabled={todos.every((t) => !t.completed)}
              aria-label="Clear completed todos"
            >
              Clear Completed
            </button>
          </div>
        </section>
      </main>

      <footer className="app-footer" role="contentinfo">
        <small>Built with the Ocean Professional theme.</small>
      </footer>
    </div>
  );
}

export default App;
