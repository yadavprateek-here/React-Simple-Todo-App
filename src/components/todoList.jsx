import React from 'react';
import ToboItem from './todoItem';
import { useState } from 'react';
import './style.css'

function Tobolist({ todos, addTodo, deleteTodo, toggleComplete, editTodo }) {
    const [newTodoText, setNewTodoText] = useState('');
  
    const handleAddTodo = () => {
      if (newTodoText.trim()) {
        addTodo(newTodoText);
        setNewTodoText('');
      }
    };
  
    return (
      <div>
        <div className="add-todo">
          <input
            type="text"
            className='input-text'
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map(todo => (
            <ToboItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              editTodo={editTodo}
            />
          ))}
        </ul>
      </div>
    );
  }

export default Tobolist;