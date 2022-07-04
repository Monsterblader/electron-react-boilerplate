import React, { useState } from 'react';
import './Todo.css';
import DeleteTodo from './DeleteTodo';

const Todo = ({ todo, handleToggleTodo, setTodos }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`todo${todo.done ? ' done' : ''}`}
      onDoubleClick={() => handleToggleTodo(todo)}
      onClick={() => setIsActive(!isActive)}
    >
      {todo.text}
      <DeleteTodo todo={todo} setTodos={setTodos} />
      {isActive && (
        <div className="todo-details">
          <div className="todo-detail-title">Assignee:</div>
          {todo.assignee ? <div>todo.assignee</div> : <div>moo.</div>}
          <div className="todo-detail-title">Due date:</div>
          {todo.dueDate ? <div>todo.dueDate</div> : <div>moo.</div>}
          <div className="todo-detail-title">Notes:</div>
          {todo.notes ? <div>todo.notes</div> : <div>moo.</div>}
        </div>
      )}
    </div>
  );
};

export default Todo;
