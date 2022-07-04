import React from 'react';
import './AddTodo.css';

const AddTodo = ({ newKey, setTodos }) => {
  const inputRef = React.useRef();

  const handleAddTodo = event => {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    if (text.length) {
      const todo = {
        id: newKey,
        text,
        done: false,
      };

      setTodos(prevTodos => prevTodos.concat(todo));
      inputRef.current.value = '';
    }
  };

  return (
    <form className="add-todo" onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTodo;

// disable button until text?
