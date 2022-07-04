import React from 'react';
import './TodoList.css';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  const handleToggleTodo = todo => {
    const updatedTodos = todos.map(t =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done,
          }
        : t
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} handleToggleTodo={handleToggleTodo} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
