import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Component/Todos';

import NewToDo from './Component/NewToDo';
import ToDoContextProvider from './Store/todo-context';
import MainHeader from './Component/MainHeader';
import Login from './Component/Login/login';
import Home from './Component/Home/Home';
import { Route } from 'react-router';


function App() {
 
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//{ } [] dependency we want to run the useeffect onces when app starts
  useEffect(() => {
    const storedUsername = localStorage.getItem('isLoggedIn');
  if(storedUsername === '1'){
    //we updated the state
    setIsLoggedIn(true)

  }
  return() => {
    
  }
  } , [])
  const loginHandler = (email:any, password:any) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn' ,'1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  return (
    // <><MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /><main>
    //   {!isLoggedIn && <Login onLogin={loginHandler} />}
    //   {isLoggedIn && <Home onLogout={logoutHandler} />}
    // </main></> 
    <>
     <main className='App'>
      <h1>My Todos</h1>
     <ToDoContextProvider>
  <Todos /> 
    </ToDoContextProvider>
    </main>
    </>
   
  );
}

export default App;
