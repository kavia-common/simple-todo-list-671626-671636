/**
 * Shared types and utility functions for the todo app.
 * Note: Using JSDoc for type hints to keep compatibility with CRA JS setup.
 */

/**
 * @typedef {Object} Todo
 * @property {string} id - Unique identifier
 * @property {string} text - Todo text
 * @property {boolean} completed - Whether the todo is completed
 */

/**
 * PUBLIC_INTERFACE
 * Generate a unique ID for todos.
 * @returns {string} A unique identifier string.
 */
export function generateId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
