import React, { useState } from 'react';
import './style.css'

function ToboItem({ todo, deleteTodo, toggleComplete, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
  
    const handleEdit = () => {
      if (isEditing) {
        editTodo(todo.id, editText);
      }
      setIsEditing(!isEditing);
    };
  
    return (
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {isEditing ? (
          <textarea
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
            autoFocus
          />
        ) : (
          <>
            <button
              className="complete"
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.completed ? '✓' : '⏳'}
            </button>
            <span className='task-txt' >{todo.text}</span>
          </>
        )}
        
        <button className="edit" onClick={handleEdit}>
          {isEditing ? '📥' : '✍️'}
        </button>
        <button className="delete" onClick={() => deleteTodo(todo.id)}>
          🗑️
        </button>
      </li>
    );
  }

export default ToboItem;

// 🗑 ✎ ⬜ 