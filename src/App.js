import React from 'react';
import './App.css';
import input from './src/components/input';
import todoItem from './components/todoItem';

import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'


function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className = 'App'>
      <div className = ".app__container">
        <div className = ".app__todoContainer">
          {
            todoList.map(item => (
            <todoItem 
              name = {item.item}
              done = {item.done}
              item = {item.id}
            />
            ))
          }
        </div>

        <input />
      </div>
    </div>

  );
}

export default App;

