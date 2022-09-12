import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Component/Todos';
import ToDo from './model/todo';
import NewToDo from './Component/NewToDo';


function App() {
  //setTodos is dispatch
  const [todos  , setTodos]= useState<ToDo[]>([]);


  const addToDoHandler= (toDoText:string) => {
    const newToDo = new ToDo(toDoText);
    setTodos((prevTodo) => {
      return prevTodo.concat(newToDo)
    })
  };
  const onRemoveToDoHandler = (id:string) => {
    setTodos((prevToDo => {
      return prevToDo.filter(todos=>todos.id !== id);
    }))
  }
  return (
    <>
    <NewToDo onAddToDo={addToDoHandler}/>
    <Todos item={todos} onRemoveToDo={onRemoveToDoHandler} />
    </>
  );
}

export default App;
