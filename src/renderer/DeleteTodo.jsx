import React from 'react';
import './DeleteTodo.css';

const DeleteTodo = ({ todo, setTodos }) => {
  const handleDeleteTodo = () => {
    const confirmed = window.confirm('Do you want to delete this?');
    confirmed && setTodos(prevTodos => prevTodos.filter((t) => t.id !== todo.id));
  };

  return (
    <span
      className="delete-todo-button"
      onClick={handleDeleteTodo}
      role="button"
    >
      x
    </span>
  );
};

export default DeleteTodo;
