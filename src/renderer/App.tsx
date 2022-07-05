import React, { useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';


const Hello = () => {
  const storedTodos = localStorage.getItem('todos') || '[]';
  const [todos, setTodos] = React.useState(JSON.parse(storedTodos));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  return (
    <div>
      <div className="half-page">
        <TodoList todos={todos} setTodos={setTodos} />
        <AddTodo newKey={todos.length} setTodos={setTodos} />
      </div>

      <div className="half-page">
        <div className="Hello">
          <img width="200px" alt="icon" src={icon} />
        </div>
        <h1>electron-react-boilerplate</h1>
        <div className="Hello">
          <a
            href="https://electron-react-boilerplate.js.org/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              <span role="img" aria-label="books">
                📚
              </span>
              Read our docs
            </button>
          </a>
          <a
            href="https://github.com/sponsors/electron-react-boilerplate"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              <span role="img" aria-label="books">
                🙏
              </span>
              Donate
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
