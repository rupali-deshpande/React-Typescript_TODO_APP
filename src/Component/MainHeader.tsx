import React from 'react';


import classes from './MainHeader.module.css';
import Navigation from './navigation';
import NewToDo from './NewToDo';

const MainHeader = (props:any) => {
  return (
    <header className={classes['main-header']}>
      <h1>To Do Application</h1>
        <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
