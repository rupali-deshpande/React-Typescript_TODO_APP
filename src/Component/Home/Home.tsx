import React from 'react';
import ToDoContextProvider from '../../Store/todo-context';
import classes from '../Home/Home.module.css';
import NewToDo from '../NewToDo';
import Todos from '../Todos';
import Card from '../UI/card';


const Home = (props:any) => {
  return (
    <Card className={classes.home}>
    <ToDoContextProvider>
    <NewToDo />
    <Todos  />
    </ToDoContextProvider>
    </Card>
  );
};

export default Home;
