import React, { useState } from "react";
import Todo from "./Todo";
import "./../styles/App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add a new todo
  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, input.trim()]);
    setInput("");
  };

  // Delete a todo
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addTodo}>Add Todo</button>
      </div>

      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
