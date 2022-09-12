import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Component/Todos';
import ToDo from './model/todo';
import NewToDo from './Component/NewToDo';
import ToDoContextProvider from './Store/todo-context';


function App() {
  //setTodos is dispatch
  
  return (
    <ToDoContextProvider>
    <NewToDo />
    <Todos  />
    </ToDoContextProvider>
  );
}

export default App;
