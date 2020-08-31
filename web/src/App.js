import React, { useState } from 'react';

import './styles.css';
import ListItems from './Components/ListItems';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

function App() {

  const [items, setItems] = useState({ text: '', key: ''});
  const [todos, setTodos] = useState([]);

  const handleInput = (input) => {
    setItems({text: input.target.value, key: Date.now()})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems({
      text: '',
      key: ''
    })
    setTodos([...todos, items]);  
  }

  const deleteItem = (key) => {
    const filtredItem = todos.filter(todo => todo.key !== key);    
    setTodos(filtredItem);
  }
  
  return (
    <div className="app">
      <h1>TO DO LIST</h1>
      <header>
        <form id="todo-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a to-do" value={items.text} onChange={handleInput}/>
          <button type="submit" onClick={handleSubmit}>Add</button> 
        </form>
      </header>

      <ListItems items={todos} deleteItem={deleteItem}/>

    </div>
  );
}

export default App;
