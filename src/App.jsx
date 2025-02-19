import { useState } from 'react'
import './App.css'
import Header from './components/header';
import Tobolist from './components/todoList';
import './components/style.css'

function App() {
 
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos(prevTodos => {
      const newTodos = [...prevTodos, { id: Date.now(), text, completed: false }];
      return newTodos.sort((a, b) => a.completed - b.completed);
    });
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      return updatedTodos.sort((a, b) => a.completed - b.completed); // Moves completed items down
    });
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="App">
      <Header />
      <Tobolist
        todos={todos}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );

}


export default App
