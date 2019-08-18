import React, { useState } from "react";
import "./App.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder= "   Write here..."/>
    </form>
  );
}

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}
      <div className="buttonDiv">
        <button className="btn" onClick={() => completeTodo(index)}>Complete</button>
        <button className="btn" onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}



function App() {
  const [todos, setTodos] = useState([
    {
      text: "Do stuff",
      isCompleted: false
    },
    {
      text: "Do more stuff",
      isCompleted: false
    },
    {
      text: "Do more more stuff",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
      <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
     
      </div>
    </div>
  );
}

export default App;