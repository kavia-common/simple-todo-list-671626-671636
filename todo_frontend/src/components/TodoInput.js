import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Input component to add new todos.
 * @param {{ onAdd: (text: string) => void }} props
 */
export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="todo-input">
      <label htmlFor="new-todo" className="sr-only">
        New todo
      </label>
      <input
        id="new-todo"
        type="text"
        className="input"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDown}
        aria-label="New todo text"
      />
      <button
        type="button"
        className="btn primary"
        onClick={handleAdd}
        aria-label="Add todo"
      >
        Add
      </button>
    </div>
  );
}
